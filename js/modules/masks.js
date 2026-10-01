'use strict';
// Máscaras formatam entrada; os patterns HTML validam os formatos resultantes.
const digitos = valor => valor.replace(/\D/g, '');
export function cpfMask(valor) {
  const d = digitos(valor).slice(0, 11);
  if (d.length <= 3) return d;
  if (d.length <= 6) return d.slice(0,3) + '.' + d.slice(3);
  if (d.length <= 9) return d.slice(0,3) + '.' + d.slice(3,6) + '.' + d.slice(6);
  return d.slice(0,3) + '.' + d.slice(3,6) + '.' + d.slice(6,9) + '-' + d.slice(9);
}
export function cepMask(valor) { return digitos(valor).slice(0,8).replace(/^(\d{5})(\d)/, '$1-$2'); }
export function telefoneMask(valor) {
  const d = digitos(valor).slice(0,11);
  if (!d) return '';
  if (d.length < 3) return '(' + d;
  const local = d.slice(2);
  const corte = local.length > 8 ? 5 : 4;
  return '(' + d.slice(0,2) + ') ' + local.slice(0,corte) + (local.length > corte ? '-' + local.slice(corte) : '');
}
