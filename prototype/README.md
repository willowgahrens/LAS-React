# LAS Report Authoring Prototype

Interactive React + Material UI prototype built from the [Figma design](https://www.figma.com/design/vZdM3uWn655XA0G6uJaUkJ/Test?node-id=1-309).

## Stack

- **Vite** + **React 19** + **TypeScript**
- **MUI v9** (matches MUI for Figma design system)
- **Roboto** via `@fontsource/roboto`

## Run locally

```bash
cd prototype
npm install
npm run dev
```

Open http://localhost:5173

## Project structure

```
src/
├── app/           # Providers (ThemeProvider, CssBaseline)
├── theme/         # MUI theme mapped from Figma tokens
├── pages/         # AuthorPage — main screen
├── components/
│   ├── layout/    # Sidebars, top bar, footer
│   ├── editor/    # Report editor, toolbar, endnotes
│   └── bundle/    # Bundle panel (right rail)
├── data/          # Mock content from Figma
└── types/
```

## Interactive features

- **Secondary sidebar** — switch tools; BUNDLE shows the full authoring view
- **Report editor** — editable mission, type, title, caveat, and body text
- **Classification chips** — dismiss with ×
- **Rich text toolbar** — toggle formatting buttons
- **Endnotes** — expand/collapse, add, delete
- **Bundle panel** — select cards, expand all, add draft form (ADD/CANCEL)
- **Footer actions** — snackbar feedback on button clicks

## Figma source

- File: `vZdM3uWn655XA0G6uJaUkJ`
- Frame: `1:309` (Report Authoring screen)
