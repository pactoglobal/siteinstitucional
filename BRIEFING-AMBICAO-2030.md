⚠ Este material foi produzido com auxílio de Inteligência Artificial.

# Briefing de implementação — Página Ambição 2030

**Cliente:** Pacto Global da ONU – Rede Brasil
**Página:** `/ambicao` (rota em hash: `#/ambicao`)
**Referência funcional:** https://pactoglobal.github.io/siteinstitucional/#/ambicao
**Código-fonte:** `github.com/pactoglobal/siteinstitucional`, branch `main`

A página já está implementada e no ar. Este briefing existe para que a agência **reproduza o mesmo padrão** ao migrar para o ambiente definitivo, ou para dar manutenção sem quebrar as decisões tomadas.

---

## 1. Stack

| Item | Valor |
|---|---|
| Framework | React 19 + Vite 7 |
| Linguagem | JavaScript (JSX). **Não há TypeScript** |
| CSS | Tailwind CSS 3.4 |
| Animação | GSAP 3.15 + ScrollTrigger, **carregado sob demanda** |
| Ícones | lucide-react |
| Deploy atual | GitHub Pages (`gh-pages -d dist`), base `/siteinstitucional/` |

---

## 2. Fonte única de conteúdo

**Toda a copy vive em `src/data/ambicao2030.js`.** Nenhum texto institucional deve ser escrito direto no JSX.

Constantes principais:

| Constante | Conteúdo |
|---|---|
| `AMBICAO_CHAMADO` | Seção "O Chamado" (parágrafos + frase-tese) |
| `AMBICAO_DEFINICAO` | Definição usada no hero |
| `AMBICAO_ORIGEM` | "Como surgiu" + linha do tempo |
| `AMBICAO_PROPOSITO` | Propósito + subtítulo |
| `AMBICAO_RESULTADOS` | Números, nota e alcance internacional |
| `AMBICAO_CITACAO` | Citação do Conselho |
| `ESTRUTURA_MOVIMENTOS` | Camadas (`camada: true/false`) |
| `AMBICAO_COMO_FAZER_PARTE` | Fecho + CTA |
| `MOVIMENTOS` | Os 10 Movimentos (ambição, compromissos, números, cores) |

O texto atual corresponde ao documento **"SUGESTÃO :: TEXTO PÁGINA | AMBIÇÃO 2030"** da RBPG. Foi conferido trecho a trecho contra a página renderizada: **49/49 presentes**.

---

## 3. Ordem das seções

1. **Hero editorial** — imagem de fundo, lockup `AMBIÇÃO` (branco) / `2030` (ouro sólido), definição, 3 stats, CTAs, faixa dos 18 ODS na base
2. **O Chamado** — abertura narrativa em fundo claro
3. **O que é a Ambição 2030** — bloco escuro com glassmorphism (citação, definição, números, linha do tempo, propósito, pilares)
4. **Os 18 ODS** — grade + destaque do ODS 18
5. **Os 10 Movimentos** — grade de cards
6. **Modalidades de engajamento**
7. **Estrutura dos Movimentos** — três camadas numeradas + dois complementos
8. **Como fazer parte** — fecho com CTA externo

---

## 4. Design tokens

```
un-blue      #1E3250   (base institucional)
un-blue-1    #4C6B8B
un-blue-2    #699CC6
un-blue-3    #AECFE6   (texto de apoio sobre escuro)
un-gold      #CCB146   (acento)
un-green     #297D6D
un-purple    #6E417A
un-red       #EC3740
un-surface   #F6F8FB   (fundo claro de seção)
un-footer    #0f2942   (fundo escuro profundo)
```

**Tipografia**

| Papel | Família |
|---|---|
| Display | `Flama` → fallback Roboto |
| Texto | `Roboto` |
| Serifa | `Lora` (citações e subtítulo do propósito) |

⚠ **Flama é fonte comercial licenciada (Feliciano Type)**, hoje auto-hospedada em `public/fonts/` (3 pesos WOFF2). Servir o arquivo em domínio público o torna baixável. **Confirmar a licença antes de publicar no domínio definitivo.**

---

## 5. Regras não negociáveis

### 5.1 Caixa-alta em português precisa de entrelinha maior
Títulos em `uppercase` com `leading` abaixo de ~1.2 fazem a cedilha de **MUDANÇA/FAÇA** e o til de **ORGANIZAÇÕES** colidirem com a linha seguinte. Usar **`leading` entre 1.2 e 1.24** em blocos display de várias linhas.

### 5.2 Não usar `background-clip: text` em texto com acento
O recorte corta diacríticos. O `2030` do hero é **ouro sólido**, não gradiente nem vazado — duas tentativas anteriores (contorno de 2px e gradiente ODS animado) foram descartadas.

### 5.3 Copy nunca depende de JS de animação para aparecer
`gsap.from()` aplica o estado inicial no momento em que a tween é criada. Se a lib demorar ou falhar, o texto **fica invisível**. Em vitrine institucional isso é inaceitável.

- **Copy** → componente `Reveal` (IntersectionObserver + CSS), que degrada para o estado final sozinho
- **GSAP** → apenas aditivo: parallax do hero, contador dos números, filete que se desenha

### 5.4 Logos dos Movimentos: canvas único
Os 10 PNGs em `public/movimentos/` têm **exatamente 691 × 142 px**, com a arte normalizada a 109 px de altura e centrada. É isso que garante que todos rendam no mesmo tamanho.

**Ao adicionar ou trocar um logo:** recortar a moldura vazia, escalar a arte para 109 px de altura, centrar em canvas de 691 × 142. Um arquivo fora desse padrão quebra a uniformidade da grade.

### 5.5 Nunca inventar dado institucional
Campos como `comiteConsultivo`, `comiteExecutivo`, `embaixadoras`, `parceirasEstrategicas`, `videoId` e `coordenacao` estão vazios de propósito. **Cada bloco só renderiza quando o campo está preenchido.** Preencher apenas com dado fornecido pela RBPG.

---

## 6. Acessibilidade e performance

- Contraste mínimo **AA (4.5:1)** para texto normal, 3:1 para texto grande. O ouro `#CCB146` sobre `un-blue` dá **6.11:1**
- Respeitar `prefers-reduced-motion`: o GSAP não carrega e as animações CSS são anuladas
- Respeitar `prefers-reduced-transparency`: o glassmorphism vira superfície sólida
- Contador de números: valor final em `sr-only`, contagem em `aria-hidden`
- Imagens abaixo da dobra com `loading="lazy"`
- **Orçamento:** JS < 150 kB gzip no chunk inicial. Hoje: ~110 kB. GSAP fica em chunks separados (~46 kB) que só baixam quando necessário

---

## 7. Pendências para a RBPG resolver

| # | Item | Impacto |
|---|---|---|
| 1 | **Imagem do hero é placeholder** (Unsplash) — trocar por foto oficial | Alto — visível no topo |
| 2 | **Licença da fonte Flama** para o domínio definitivo | Alto — jurídico |
| 3 | Duas notas de rodapé viraram fragmentos ao remover os asteriscos: *"Das organizações listadas."* e *"Negras, indígenas, quilombolas…"* — precisam de redação nova ou de referente | Médio |
| 4 | Definir se os cards dos Movimentos levam badge de ODS, rótulo "Movimento 01" e barra colorida no topo — houve idas e vindas | Médio |
| 5 | Dados de governança dos Movimentos (comitês, embaixadoras, parceiras) | Baixo — blocos ocultos até haver dado |
| 6 | Vídeos dos Movimentos (`videoId`) | Baixo |

---

## 8. Como validar a entrega

1. `npm run lint` → **0 erros**
2. `npm run build` → sem falhas, JS inicial < 150 kB gzip
3. Conferir a copy contra o documento oficial da RBPG, trecho a trecho
4. Testar em **375, 768, 1024 e 1440 px** — sem overflow horizontal
5. Testar com `prefers-reduced-motion` ativo — todo o conteúdo legível
6. Console do navegador sem erros; nenhum 404 de imagem

---

## 9. Gates de aprovação

| 🔴 Sempre humano (Brener + Monica) | 🟡 Co-aprovação | 🟢 Autônomo |
|---|---|---|
| Qualquer copy pública | Componente novo | Refactor interno |
| Logos (Pacto, ONU, ODS, parceiros) | Nova dependência | Correção de bug |
| Governança, liderança, conselho | Formulário LGPD | Testes |
| Estatísticas públicas | Tracking/analytics | Documentação interna |
| Deploy de produção | Mudança de layout | Ajustes de estilo |
