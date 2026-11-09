#!/bin/bash
set -e

# Portao de qualidade: o lint pega referencia a componente ou constante que
# nao existe (no-undef), que e exatamente o erro que ja derrubou a pagina da
# Ambicao duas vezes em producao. Com set -e, lint vermelho aborta o deploy.
echo "→ Lint..."
npm run lint

# Garante que o index.html seja o template correto antes do build
cat > index.html << 'EOF'
<!doctype html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" href="/siteinstitucional/favicon.png" />
  <link rel="apple-touch-icon" href="/siteinstitucional/favicon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pacto Global da ONU - Rede Brasil</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Lora:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    rel="stylesheet">

  <script type="module" src="/src/main.jsx"></script>
</head>

<body>
  <div id="root"></div>
</body>

</html>
EOF

# Build
npm run build

# Fallback de SPA: o gh-pages publica apenas o conteudo de dist/, entao o
# 404.html precisa estar DENTRO de dist. Sem isso, link direto sem hash
# (ex: /siteinstitucional/ambicao) devolve o 404 do GitHub.
cp dist/index.html dist/404.html

# Espelha o build inteiro na raiz (gh-pages). Antes so index.html e assets/
# vinham para ca, e tudo o que mora em public/ (fontes, fotos, icones) ficava
# de fora: a fonte Flama dava 404 em producao e as imagens novas de
# movimentos/ nunca foram publicadas.
cp -R dist/. .

# Carimbo de tempo da versao que esta no ar (os nomes em assets/ terminam em
# -<carimbo>, ver vite.config.js). Lido do index.html commitado, porque o da
# raiz ja foi trocado pelo template e pelo build.
CARIMBO_NO_AR=$(git show HEAD:index.html 2>/dev/null | grep -oE 'assets/index-[^"]*-[0-9]+\.js' | head -1 | sed -E 's/.*-([0-9]+)\.js$/\1/' || true)

# O cp acima so acrescenta: um arquivo que saiu do build (ex.: foto removida
# de public/) continuaria publicado. O manifesto guarda a lista do que o
# ultimo deploy colocou na raiz; o que estava la e nao esta no build novo e
# apagado. Sem manifesto (primeiro deploy com ele), vale como lista antiga
# tudo o que ja existe na raiz sob os mesmos nomes de topo do build.
MANIFESTO=".deploy-manifest"
# Nunca apagar codigo-fonte ou configuracao, mesmo que um nome desses
# apareca por engano no build.
PROTEGIDOS='^(src|public|node_modules|\.git|\.claude|\.vscode|\.vite)(/|$)|^(package\.json|package-lock\.json|pnpm-lock\.yaml|deploy\.sh|vite\.config\.js|tailwind\.config\.js|postcss\.config\.js|eslint\.config\.js|\.gitignore|\.deploy-manifest)$'

NOVO_MANIFESTO=$(cd dist && find . -type f | sed 's|^\./||' | LC_ALL=C sort)

if [ -f "$MANIFESTO" ]; then
  ANTIGO_MANIFESTO=$(LC_ALL=C sort "$MANIFESTO")
else
  ANTIGO_MANIFESTO=$(cd dist && find . -mindepth 1 -maxdepth 1 | sed 's|^\./||' | while IFS= read -r topo; do
    [ -e "../$topo" ] && (cd .. && find "$topo" -type f)
  done | LC_ALL=C sort)
fi

SAIRAM=$(LC_ALL=C comm -23 <(printf '%s\n' "$ANTIGO_MANIFESTO") <(printf '%s\n' "$NOVO_MANIFESTO") | grep -Ev "$PROTEGIDOS" | grep -v '^$' || true)

# Os arquivos da versao no ar ficam por mais um deploy: quem esta com a pagina
# aberta ainda carrega partes dela sob demanda (ex.: ScrollTrigger). Entram no
# manifesto novo e saem no deploy seguinte.
MANTIDOS=""
if [ -n "$CARIMBO_NO_AR" ]; then
  MANTIDOS=$(printf '%s\n' "$SAIRAM" | grep -E "^assets/.*-${CARIMBO_NO_AR}\.[a-z0-9]+$" || true)
fi
REMOVIDOS=$(LC_ALL=C comm -23 <(printf '%s\n' "$SAIRAM" | LC_ALL=C sort) <(printf '%s\n' "$MANTIDOS" | LC_ALL=C sort) | grep -v '^$' || true)

if [ -n "$REMOVIDOS" ]; then
  echo "→ Removendo da raiz o que saiu do build:"
  printf '%s\n' "$REMOVIDOS" | while IFS= read -r arquivo; do
    echo "   - $arquivo"
    rm -f -- "$arquivo"
    # Remove as pastas que ficaram vazias, subindo ate a raiz.
    pasta=$(dirname -- "$arquivo")
    while [ "$pasta" != "." ] && [ -d "$pasta" ] && [ -z "$(ls -A -- "$pasta")" ]; do
      rmdir -- "$pasta"
      pasta=$(dirname -- "$pasta")
    done
  done
fi

printf '%s\n%s\n' "$NOVO_MANIFESTO" "$MANTIDOS" | grep -v '^$' | LC_ALL=C sort -u > "$MANIFESTO"

echo "✓ Build concluído. Pronto para commit e push."
echo "  Use git add -A no commit de deploy, para levar também as remoções."
