# Verificações

A SPA foi testada no Chrome com dados fictícios.

- Navegação por hash, alteração de título e renderização dos três cartões.
- Cadastro completo com máscaras e confirmação local.
- Salvar rascunho, limpar campos e recuperar os valores.
- Recarregar com recuperação automática e excluir somente a chave do protótipo.
- Dropdown abre e fecha com Escape; modal fecha e restaura foco.
- Layout verificado em 375, 480, 768, 1024, 1280 e 1536 pixels na versão-base.
- Build com Terser executado; CSS e JS gerados em docs/assets; entrada de produção renderizada no Chrome.

Os testes de quota/permissão de armazenamento e a avaliação completa com leitor de tela não foram executados. Os erros de storage são tratados por try/catch.
