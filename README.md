# Pontes do Amanhã

Protótipo acadêmico de ONG fictícia, com apresentação, projetos sociais e cadastro demonstrativo. Não há doações reais ou envio a servidor. Utilize somente dados fictícios; o rascunho pode permanecer no localStorage do navegador.

## Tecnologias e estrutura

HTML5, CSS3, JavaScript com módulos ES e Terser 5.51.2 como ferramenta de build.

- html/index.html: entrada da SPA.
- css/: tokens, estilos básicos, layout e componentes.
- imagens/: ilustração original em SVG, PNG, JPEG e WebP.
- js/main.js e js/modules/: rotas, templates, navegação, formulário, máscaras e armazenamento.
- docs/: versão de produção minificada, pronta para GitHub Pages.
- ACESSIBILIDADE.md, CONTRASTE.json, TESTES.md e BUILD.json: registros técnicos.

## Instalação e uso

Requer Node.js/npm para build e um servidor HTTP para servir módulos.

```sh
npm ci
npm run build
python3 -m http.server 8000
```

Abra http://localhost:8000/html/index.html para desenvolvimento ou http://localhost:8000/docs/ para produção. Rotas: #inicio, #projetos e #cadastro.

## Versionamento e revisão

main mantém a versão estável; develop integra o trabalho; feature/* isola funcionalidades; release/* prepara lançamentos; hotfix/* atende correções urgentes. Commits usam feat, fix, docs e build. A versão inicial é v1.0.0. Pull requests devem verificar navegação, formulário, rascunho, foco, contraste e recursos do build.

## Publicação

GitHub Pages serve a pasta /docs da branch main. O build gera CSS único, JavaScript minificado e copia as imagens. Após qualquer alteração, gere novamente o build e verifique as três rotas antes de publicar. URL prevista: https://manimgomes.github.io/pontes-do-amanha-front-end/ . A confirmação da publicação depende do status do deploy.

## Acessibilidade e manutenção

Semântica, labels, foco visível, link de salto, controles nativos, mensagens de erro, contraste e anúncios de rota são documentados em ACESSIBILIDADE.md. O registro não substitui uma auditoria integral com tecnologias assistivas.

Para ampliar as iniciativas, altere os dados em templates.js. Para mudar a paleta, revise tokens.css e recalcule os contrastes. Não inclua chaves privadas em arquivos enviados ao navegador. Um sistema real exigiria API, proteção de dados e validação no servidor.
