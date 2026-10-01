import {cpfMask,cepMask,telefoneMask} from './masks.js';
import {salvar,recuperar,excluir} from './storage.js';
export function iniciarFormulario(){
 const form=document.querySelector('#cadastro');if(!form)return;
 const resultado=form.querySelector('#resultado');
 const controles=[...form.querySelectorAll('input,select,textarea')];
 const atualizar=campo=>{const invalido=!campo.validity.valid;campo.classList.toggle('invalid',invalido);campo.classList.toggle('valid',!invalido&&Boolean(campo.value));campo.setAttribute('aria-invalid',String(invalido));let erro=document.getElementById(campo.id+'-erro');if(!erro){erro=document.createElement('span');erro.id=campo.id+'-erro';erro.className='erro';campo.closest('.campo,.check').append(erro);campo.setAttribute('aria-describedby',((campo.getAttribute('aria-describedby')||'')+' '+erro.id).trim())}erro.textContent=invalido?campo.validationMessage:'';};
 for(const [id,mascara] of [['cpf',cpfMask],['cep',cepMask],['telefone',telefoneMask]]){const campo=form.querySelector('#'+id);campo.addEventListener('input',()=>campo.value=mascara(campo.value));}
 const hoje=new Date();form.querySelector('#nascimento').max=`${hoje.getFullYear()}-${String(hoje.getMonth()+1).padStart(2,'0')}-${String(hoje.getDate()).padStart(2,'0')}`;
 controles.forEach(c=>{c.addEventListener('blur',()=>atualizar(c));c.addEventListener('input',()=>{resultado.textContent='';if(c.hasAttribute('aria-invalid'))atualizar(c)})});
 form.addEventListener('invalid',e=>atualizar(e.target),true);
 form.addEventListener('submit',e=>{e.preventDefault();controles.forEach(atualizar);resultado.textContent='Cadastro fictício validado. Nenhum dado enviado. Use Salvar rascunho se desejar guardar a demonstração localmente.';});
 form.addEventListener('reset',()=>{controles.forEach(c=>{c.classList.remove('invalid','valid');c.removeAttribute('aria-invalid')});form.querySelectorAll('.erro').forEach(e=>e.textContent='');resultado.textContent='Campos limpos; o rascunho salvo permanece disponível.';});
 form.querySelector('#salvar-rascunho').addEventListener('click',()=>{try{const dados={};controles.forEach(c=>dados[c.name]=c.type==='checkbox'?c.checked:c.value);salvar(dados);resultado.textContent='Rascunho fictício salvo somente neste navegador.';}catch{resultado.textContent='Não foi possível salvar: armazenamento indisponível.';}});
 const recuperarFormulario=()=>{try{const dados=recuperar();if(!dados){resultado.textContent='Nenhum rascunho salvo.';return;}controles.forEach(c=>{if(Object.hasOwn(dados,c.name)){if(c.type==='checkbox')c.checked=dados[c.name]===true;else if(typeof dados[c.name]==='string')c.value=dados[c.name];}});controles.forEach(atualizar);resultado.textContent='Rascunho fictício recuperado. Revise os campos antes de validar.';}catch{resultado.textContent='Não foi possível recuperar o rascunho. Exclua o registro incompatível e tente novamente.';}};
 form.querySelector('#recuperar-rascunho').addEventListener('click',recuperarFormulario);
 recuperarFormulario();
 form.querySelector('#excluir-rascunho').addEventListener('click',()=>{try{excluir();resultado.textContent='Rascunho local excluído.';}catch{resultado.textContent='Não foi possível acessar o armazenamento.';}});
}
