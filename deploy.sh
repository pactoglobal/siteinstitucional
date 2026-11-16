#!/bin/bash
set -e

# Portao de qualidade: o lint pega referencia a componente ou constante que
# nao existe (no-undef), que e exatamente o erro que ja derrubou a pagina da
# Ambicao duas vezes em producao. Com set -e, lint vermelho aborta o deploy.
echo "→ Lint..."
npm run lint

# Restaura index.html fonte para o Vite compilar sem erros de bundles anteriores
if [ -f index.source.html ]; then
  cp index.source.html index.html
fi

# Build
npm run build

# Extrai os asset hashes do index.html recém-construído
JS_ASSET=$(grep -o 'assets/index-[^"]*\.js' dist/index.html | head -1 | sed 's|assets/||')
CSS_ASSET=$(grep -o 'assets/index-[^"]*\.css' dist/index.html | head -1 | sed 's|assets/||')

echo "→ Assets detectados: JS=$JS_ASSET, CSS=$CSS_ASSET"

# Gera 404.html APÓS o build com os hashes CORRETOS
# O 404.html precisa converter paths sem hash (ex: /siteinstitucional/esg) 
# para hash-based routing (/#/esg) para GitHub Pages SPA
cat > dist/404.html << 'EOF'
<!doctype html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" href="/siteinstitucional/favicon.png" />
  <link rel="apple-touch-icon" href="/siteinstitucional/favicon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pacto Global da ONU - Rede Brasil</title>
  <script>
    // GitHub Pages SPA fallback for hash-based routing
    // Converte paths sem hash para hash-based routing
    (function() {
      var path = window.location.pathname;
      var hash = window.location.hash;
      
      // Remove prefixo /siteinstitucional se presente
      var cleanPath = path.replace('/siteinstitucional', '');
      
      if (hash) {
        // Já tem hash, redireciona preservando
        window.location.replace('/siteinstitucional/' + hash);
      } else if (cleanPath && cleanPath !== '/' && cleanPath !== '') {
        // Path sem hash - converte para hash-based routing
        // Ex: /siteinstitucional/esg -> /siteinstitucional/#/esg
        window.location.replace('/siteinstitucional/#' + cleanPath);
      } else {
        // Raiz ou vazio, redireciona para home
        window.location.replace('/siteinstitucional/');
      }
    })();
  </script>
</head>

<body>
  <div id="root"></div>
  <script type="module" crossorigin src="/siteinstitucional/assets/__JS_ASSET__"></script>
  <link rel="stylesheet" crossorigin href="/siteinstitucional/assets/__CSS_ASSET__">
</body>

</html>
EOF

# Substitui placeholders pelos hashes reais usando Python (mais confiável que sed)
python3 -c "
import sys
js_asset = sys.argv[1]
css_asset = sys.argv[2]
with open('dist/404.html', 'r') as f:
    content = f.read()
content = content.replace('__JS_ASSET__', js_asset)
content = content.replace('__CSS_ASSET__', css_asset)
with open('dist/404.html', 'w') as f:
    f.write(content)
" "$JS_ASSET" "$CSS_ASSET"

# Copia os arquivos compilados para a raiz (gh-pages)
mkdir -p assets
cp dist/index.html index.html
cp dist/404.html 404.html
cp dist/assets/* assets/

echo "✓ Build concluído. Pronto para commit e push."