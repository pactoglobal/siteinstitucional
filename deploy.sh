#!/bin/bash
set -e

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

# Copia os arquivos compilados para a raiz (gh-pages)
cp dist/index.html index.html
cp dist/assets/* assets/

echo "✓ Build concluído. Pronto para commit e push."
