# iGraal — Homepage 2.0 (logged in)

Protótipo em HTML da homepage logada do iGraal, construído sobre o **Nalu Design System 1.19.0**.

## Views

O seletor no canto inferior direito alterna três variantes da mesma página:

- **Desktop** — layout padrão
- **Mobile** — coluna de 402px com estrutura própria (não é o desktop reduzido)
- **Black Friday** — hero de campanha com fundo preto, disponível em desktop e mobile de forma independente

## Estrutura

```
Homepage Desktop.dc.html   página principal (todas as views)
Homepage v4.dc.html        variante em exploração
Homepage.dc.html           versão inicial
support.js                 runtime necessário para abrir os .dc.html
components/                componentes e assets materializados do Figma
  ├── Components.bundle.js componentes do Figma (JS pré-compilado)
  ├── fig-assets.css       classes de imagem/logo
  ├── fig-tokens.css       tokens do Figma
  ├── fig-typography.css   estilos de texto
  ├── assets/              imagens (WebP/PNG)
  └── logos/               logos de comerciantes
desktop/                   chrome do desktop (icons, conteúdo, CSS)
_ds/                       Nalu Design System 1.19.0
export/                    HTML autocontido, abre offline sem servidor
uploads/                   material original enviado (fontes das imagens)
```

## Como abrir

**Sem instalar nada:** abra `export/iGraal Homepage Desktop.html` no navegador — é um único arquivo com todos os assets embutidos.

**Para editar:** os arquivos `.dc.html` precisam ser servidos por HTTP (por causa dos caminhos relativos):

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000/Homepage%20Desktop.dc.html
```

## Deploy

A versão publicada mais recente:
https://igraal-homepage-v3-final-42efbf34-eaba-46dc-9afa-166-5ui1e6hnl.vercel.app
