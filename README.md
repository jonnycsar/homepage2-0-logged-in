# Logged Homepage 2.0 — iGraal

Protótipo da homepage logada do iGraal, construído sobre o **Nalu Design System 1.19.0**.

## Como abrir

Abra `index.html` no navegador, ou publique em **Settings → Pages → Branch: main / root**.
Todos os caminhos são relativos, então funciona direto da raiz do repositório.

## Views

O seletor no canto inferior direito alterna entre:

- **Desktop** — layout padrão
- **Mobile** — coluna de 402px com estrutura própria
- **Black Friday** — campanha sazonal, com toggles independentes para desktop e mobile

## Estrutura

```
index.html                  página (Design Component)
support.js                  runtime do DC
_ds/nalu/                   Nalu Design System — tokens, estilos, bundle, fontes
components/
  Components.bundle.js      componentes materializados do Figma
  fig-*.css                 tokens, tipografia e classes de imagem do Figma
  assets/                   59 ilustrações, banners e artes
  logos/                    163 logos de marca em uso na página
desktop/                    chrome do desktop (header, footer, ícones, conteúdo)
```

Só estão incluídos os arquivos que a página realmente carrega. Fontes Inter e os scripts
d3/topojson (usados pelo mapa) vêm de CDN.
