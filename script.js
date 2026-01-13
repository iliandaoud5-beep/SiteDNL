
function animerElement1(element) {
  element.classList.remove('slide-left');
  void element.offsetWidth;
  element.classList.add('slide-left');
}
function animerElement2(element) {
  element.classList.remove('slide-right');
  void element.offsetWidth;
  element.classList.add('slide-right');
}

let sommaire = 0;
onload = () => {div1.classList.add('expand-full');};

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('bttnmenu');
  const target = document.getElementsByClassName('div2')[0];
  const div1 = document.getElementsByClassName('div1')[0];
  if (!btn || !target) return;
  btn.addEventListener('click', () => {
    if (sommaire === 0) {
      target.classList.remove('slide-right');
      animerElement1(target);
      div1.classList.add('expand-full');
      sommaire = 1;
    } else if (sommaire === 1) {
      animerElement2(target);
      div1.classList.remove('expand-full');
      sommaire = 0;
    }
  });
});
