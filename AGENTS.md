# AGENTS.md — site-institucional (Pacto Global ONU – Rede Brasil)

> Para qualquer agente que abrir este repo: leia tambem `../AGENTS.md` (topologia geral).
> Idioma: **PT-BR**.

---

## 1. Identidade

- **Repo**: site-institucional (`package.json` name: `pacto-hub-redbull`)
- **Papel**: site institucional permanente do **Pacto Global da ONU – Rede Brasil**. Hub que apresenta a rede, frentes tematicas, ODS, lideranca, eventos, parceiros.
- **Stack**:
  - React + TypeScript + Vite
  - Deploy: GitHub Pages (gh-pages)
  - Sem backend proprio — pode ter integracoes via formularios estaticos
- **Risco principal**: vitrine institucional permanente. Bug em prod afeta credibilidade do Pacto Global continuamente, nao so durante evento.

## 2. Fonte da verdade no vault

**Sempre leia antes de mexer:**

- `../../../Second-Brain/10-Projetos/10.03-Site-Institucional-Pacto-Global/_MOC.md`
- `../../../Second-Brain/10-Projetos/10.03-Site-Institucional-Pacto-Global/Brief.md`
- `../../../Second-Brain/10-Projetos/10.03-Site-Institucional-Pacto-Global/Roadmap.md`
- `../../../Second-Brain/10-Projetos/10.03-Site-Institucional-Pacto-Global/Regras-do-Projeto.md`
- `../../../Second-Brain/20-Areas/20.01-Pacto-Global-ONU/_MOC.md` (10 frentes tematicas, governanca: Guilherme/Monica/Ana/Brener)

**Backup do site anterior**: `../_BACKUP_site_institucional_pacto_global_onu/` — **somente leitura**, nao modificar. Util pra consultar copy/imagens da versao antiga.

## 3. Rituais de escrita no vault (DRY)

**Regra base**: trabalho agentic via Paperclip → activity log da issue eh canon. Vault nao espelha. Antes de escrever, regra das 3 perguntas (`../AGENTS.md` §4).

| Gatilho | O que escrever | Onde | Template |
|---|---|---|---|
| Mudanca de copy publica | ADR + diff | `../../../Second-Brain/10-Projetos/10.03-Site-Institucional-Pacto-Global/Decisions/YYYY-MM-DD-copy-<slug>.md` | `T-Decision-Log` |
| Inclusao/remocao de logo (parceiro, patrocinador, ODS) | ADR | mesmo lugar | `T-Decision-Log` |
| Mudanca em frentes tematicas, lideranca, governanca | ADR + atualizar `20.01-Pacto-Global-ONU/_MOC` | mesmo lugar | `T-Decision-Log` |
| Mudanca de imagens publicas (com substituicao versionada) | ADR | mesmo lugar | `T-Decision-Log` |
| Sessao **humana** (sem agente Paperclip) ou kickoff de fase | nota | `../../../Second-Brain/10-Projetos/10.03-Site-Institucional-Pacto-Global/Sessions/` | `T-Session-AI` |
| Post-mortem de bug em producao | sintese | mesmo lugar com prefixo `postmortem-` | livre |
| Aprendizado generalizavel | Permanent | `../../../Second-Brain/40-Zettelkasten/40.03-Permanent/` | `T-Permanent` |

**O que NAO escrever no vault**: sessao de codigo agentic com issue aberta, espelho de issue.

## 4. Approval gates

Site institucional eh **rosto publico permanente do Pacto Global ONU**. Gates ainda mais rigidos que do Forum:

- 🔴 **Sempre humano (minimo Brener; ideal Brener + Monica)**:
  - **Qualquer** mudanca de copy publica
  - Mudanca de logo proprio do Pacto Global, ONU ou ODS
  - Inclusao/remocao de logo de parceiro
  - Mudanca em pagina de governanca, lideranca, conselho
  - Mudanca em estatisticas publicas (numero de empresas, signatarios, etc.)
  - Deploy de producao (`gh-pages` push)
  - Adicao de qualquer formulario LGPD-relevante
  - Adicao de tracking (Google Analytics, Hotjar, Pixel)

- 🟡 **Co-aprovacao**:
  - Mudanca de UI/visual sem alterar copy nem logos
  - Refactor que afeta acessibilidade (WCAG)
  - Adicao de pacote npm
  - Mudanca em build pipeline ou GitHub Actions

- 🟢 **Autonomo**:
  - Refactor sem mudanca visual nem comportamental
  - Adicao de testes
  - Fix de bug com repro confirmado (NAO copy)
  - Atualizacao de dependencias patch
  - Atualizacao de docs internos do repo

Matriz completa: `../../../Second-Brain/20-Areas/20.06-Empresa-Zero-Humanos/Playbooks/Approval-Gate-Matrix.md`

## 5. Acessibilidade (obrigatorio)

Site institucional precisa atender **WCAG 2.1 AA** no minimo:
- contraste minimo 4.5:1 em texto normal
- alt em todas as imagens
- navegavel por teclado
- semantic HTML
- foco visivel
- aria-labels onde necessario

Antes de qualquer PR: rodar audit (Lighthouse, axe-core).

Skill disponivel: `design:accessibility-review`.

## 6. SEO (importante)

- Meta tags completas em cada pagina
- `og:image`, `og:title`, `og:description` com variantes para WhatsApp/LinkedIn
- `robots.txt` permitindo crawl
- Sitemap.xml gerado no build
- URLs PT-BR (`/sobre`, `/frentes`, `/governanca` — nao `/about`, `/fronts`)

Skill disponivel: `marketing:seo-audit`.

## 7. LGPD

Mesmas regras do Forum 2030 (`../2026-ambition-update/AGENTS.md` §5):
- consentimento explicito em qualquer form
- politica de privacidade publicada e linkavel
- nao logar PII em console/server logs
- aprovacao do juridico do Pacto Global antes de qualquer captura de dado

## 8. Brand UN Global Compact

Mesma referencia do Forum: `UN_Global_Compact_Brand_Guidelines.pdf` (esta no repo `../2026-ambition-update/`).

Validar SEMPRE antes de mudar visual:
- cores
- tipografia
- combinacao logo Pacto Global + ONU
- clear space dos logos
- ODS icons (nao recolorir, nao redesenhar — usar oficiais)

## 9. Comandos canonicos

```bash
# Bootstrap (este repo usa pnpm/npm — verificar package-lock)
pnpm install

# Dev
pnpm dev

# Build
pnpm build

# Preview
pnpm preview

# Deploy GitHub Pages
pnpm run deploy   # ou o script equivalente em package.json
```

## 10. Secrets

- Provavelmente nenhum (site estatico). Verificar `.env` antes de commit.
- Se houver: `${env:VAR}` no codigo, `.env.example` versionado, `.env` no `.gitignore`.

## 11. Commits

- PT-BR. Conventional commits.
- Ex: `feat(governanca): adicionar nova diretora ao conselho`
- **JAMAIS** push direto pra `main`/`gh-pages` sem aprovacao do Brener.

## 12. Linka

- Topologia: `../AGENTS.md`
- Vault MOC: `../../../Second-Brain/10-Projetos/10.03-Site-Institucional-Pacto-Global/_MOC.md`
- Pacto Global Area: `../../../Second-Brain/20-Areas/20.01-Pacto-Global-ONU/_MOC.md`
- Backup do site antigo: `../_BACKUP_site_institucional_pacto_global_onu/` (read-only)
