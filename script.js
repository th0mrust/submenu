

let heeftSub = document.querySelectorAll('.thom-submenu > a');
console.log(heeftSub);

for(let i=0; 1<heeftSub.length; i++) {
  heeftSub[i].addEventListener('click', (e)=> e.preventDefault());
}
