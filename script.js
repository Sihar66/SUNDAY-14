
function selectOption(el) {
  document.querySelectorAll('.toggle-row button').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
}
function selectAmount(el) {
  document.querySelectorAll('.amount-row button').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
}
