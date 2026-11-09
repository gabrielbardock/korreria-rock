# Korreria Rock

Site institucional da banda, feito com React, Vite, Tailwind CSS e SCSS.

## Estrutura

- `src/components/`: componentes React organizados por seção, cada um com seu SCSS.
- `src/components/shared/`: ícones compartilhados.
- `src/data/`: conteúdo dos integrantes.
- `src/styles/`: estilos globais e variáveis Sass.

## Rodar localmente

```bash
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Publicar no GitHub Pages

O workflow em `.github/workflows/deploy.yml` publica automaticamente o site a cada push na branch `main`. No repositório, habilite **Settings → Pages → Build and deployment → Source: GitHub Actions**. O caminho base é definido automaticamente para o nome do repositório.

## Atualizar conteúdo

- Edite a lista de integrantes e links de Instagram em `src/data/members.ts`.
- Atualize os shows no componente `src/components/Agenda/Agenda.tsx` quando as datas estiverem confirmadas.
- A logo utilizada está em `assets/logo-branca.png`.
