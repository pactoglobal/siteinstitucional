#!/bin/bash
set -e

# Portao de qualidade: o lint pega referencia a componente ou constante que
# nao existe (no-undef), que e exatamente o erro que ja derrubou a pagina da
# Ambicao duas vezes em producao. Com set -e, lint vermelho aborta o deploy.
echo "→ Lint..."
npm run lint

# Build
npm run build

# Extrai os asset hashes do index.html recém-construído
JS_ASSET=$(grep -o 'assets/index-[^"]*\.js' dist/index.html | head -1 | sed 's|assets/||')
CSS_ASSET=$(grep -o 'assets/index-[^"]*\.css' dist/index.html | head -1 | sed 's|assets/||')

echo "→ Assets detectados: JS=$JS_ASSET, CSS=$CSS_ASSET"

# Gera 404.html APÓS o build com os hashes CORRETOS
cat > dist/404.html << EOF
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
    // Redirects 404 to index.html with the hash preserved
    (function() {
      var path = window.location.pathname;
      var hash = window.location.hash;
      if (hash) {
        // Already has hash, let index.html handle it
        window.location.replace('/siteinstitucional/' + hash);
      } else if (path !== '/siteinstitucional/') {
        // No hash, redirect to root
        window.location.replace('/siteinstitucional/');
      }
    })();
  </script>
</head>

<body>
  <div id="root"></div>
  <script type="module" crossorigin src="/siteinstitucional/assets/$JS_ASSET"></script>
  <link rel="stylesheet" crossorigin href="/siteinstitucional/assets/$CSS_ASSET">
</body>

</html>
EOF

# Copia os arquivos compilados para a raiz (gh-pages)
mkdir -p assets
cp dist/index.html index.html
cp dist/404.html 404.html
cp dist/assets/* assets/

echo "✓ Build concluído. Pronto para commit e push."