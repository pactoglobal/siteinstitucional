# CLAUDE.md — Site Institucional Pacto Global ONU

> Leia este arquivo ao iniciar qualquer sessão. Depois acesse `AGENTS.md` para regras completas.
> **Idioma: PT-BR** | ⚠️ Vitrine institucional permanente — gates máximos

---

## 🎯 O que é

Site institucional permanente do **Pacto Global da ONU – Rede Brasil**. Hub que apresenta rede, frentes temáticas, ODS, liderança, eventos e parceiros.

**Risco principal**: vitrine institucional contínua — bug em prod afeta credibilidade permanentemente.

---

## ⚡ Contexto imediato

1. Leia `AGENTS.md` — regras + approval gates completos
2. Leia `../../../Second-Brain/10-Projetos/10.03-Site-Institucional-Pacto-Global/_MOC.md`
3. **Identidade visual**: seguir guidelines ONU/Pacto Global — obrigatório
4. Backup de referência (somente leitura): `../_BACKUP_site_institucional_pacto_global_onu/`

---

## 🛠️ Stack

```
Framework: React + TypeScript + Vite
CSS:       Tailwind
Deploy:    GitHub Pages (gh-pages)
Manager:   npm
```

## 💻 Comandos

```bash
npm install    # bootstrap
npm run dev    # dev server
npm run build  # build prod
npm run lint   # lint
```

---

## 🚦 Approval gates (resumo)

| 🔴 Sempre humano (Brener + Monica) | 🟡 Co-aprovação | 🟢 Autônomo |
|---|---|---|
| qualquer copy pública | componente novo | refactor interno |
| logos (Pacto, ONU, ODS, parceiros) | nova dep | fix de bug |
| governança/liderança/conselho | formulário LGPD | testes |
| estatísticas públicas | tracking/analytics | docs internos |
| deploy de produção | mudança de layout | ajustes de estilo |

---

## 🔗 Vault

```
../../../Second-Brain/10-Projetos/10.03-Site-Institucional-Pacto-Global/_MOC.md
../../../Second-Brain/20-Areas/20.01-Pacto-Global-ONU/_MOC.md  ← 10 frentes temáticas
```
