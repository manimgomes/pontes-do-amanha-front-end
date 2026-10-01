# Revisão de acessibilidade

Referência: [WCAG 2.1](https://www.w3.org/TR/WCAG21/) e [guia de consulta WAI](https://www.w3.org/WAI/WCAG21/quickref/).

- 1.1.1: ilustrações com textos alternativos; símbolo do menu oculto por aria-hidden.
- 1.3.1: header/nav/main/footer; títulos em ordem; labels, fieldsets e legends.
- 1.4.1 e 3.3.1: erros indicados por texto e aria-invalid, além da cor.
- 1.4.3: pares principais de texto calculados em CONTRASTE.json, acima de 4,5:1.
- 1.4.11: borda inicial #b8c6c0 tinha 1,77:1 contra branco; foi corrigida para #738477, 3,97:1.
- 2.1.1/2.1.2: links, botões, select, details e dialog nativos; Escape recolhe menu/dropdown e fecha modal.
- 2.4.1/2.4.2/2.4.7: link de salto, título atualizado por rota e foco visível.
- 3.1.1: lang=pt-BR.
- 3.3.2: campos obrigatórios identificados e instruções de formato associadas.
- 4.1.2/4.1.3: aria-expanded, aria-current, rótulos do diálogo, status de cadastro e anúncio de rota.

Método: revisão de código, medições de contraste, testes de teclado/interação no Chrome e inspeção da árvore de acessibilidade. A inspeção da árvore permite verificar nomes, papéis e estados, mas não equivale a teste completo com leitor de tela. Este registro documenta os critérios revisados; não constitui certificação integral WCAG.
