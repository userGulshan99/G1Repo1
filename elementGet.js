
const elet=document.createElement('h3');
const Text=document.createTextNode('Buy high quality organic fruits online');
elet.appendChild(Text);

const divselect_1=document.querySelectorAll('div');
divselect_1[0].appendChild(elet);
elet.style.fontStyle="italic";

const total=document.createElement('p');
const fr=document.createTextNode('Total fruits: 4');
total.appendChild(fr);

let fruits=document.querySelector('ul');
divselect_1[1].insertBefore(total,fruits);
total.id="fruits-total";