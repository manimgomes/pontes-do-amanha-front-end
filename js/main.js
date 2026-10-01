import {templates} from './modules/templates.js';
import {iniciarFormulario} from './modules/forms.js';
import {iniciarNavegacao,iniciarModal} from './modules/navigation.js';
const main=document.querySelector('#conteudo');
function renderizar(){const solicitada=location.hash.slice(1)||'inicio';const rota=Object.hasOwn(templates,solicitada)?solicitada:'inicio';main.innerHTML=templates[rota];document.title=({inicio:'Início',projetos:'Projetos sociais',cadastro:'Participar'})[rota]+' | Pontes do Amanhã';document.querySelector('#anuncio-rota').textContent=document.title;document.querySelectorAll('nav a').forEach(a=>{if(a.hash==='#'+rota)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});iniciarFormulario();iniciarModal();main.focus();window.scrollTo(0,0);}
iniciarNavegacao();window.addEventListener('hashchange',()=>{if(location.hash==='#conteudo'){main.focus();return;}renderizar();});renderizar();
