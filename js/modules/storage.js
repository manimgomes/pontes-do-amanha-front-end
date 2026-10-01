const CHAVE='pontes-do-amanha:rascunho:v1';
export function salvar(dados){localStorage.setItem(CHAVE,JSON.stringify({versao:1,dados}));}
export function recuperar(){const texto=localStorage.getItem(CHAVE);if(!texto)return null;const objeto=JSON.parse(texto);if(objeto?.versao!==1||!objeto.dados||typeof objeto.dados!=='object')throw new Error('Rascunho incompatível');return objeto.dados;}
export function excluir(){localStorage.removeItem(CHAVE);}
