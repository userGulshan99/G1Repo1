
const h1=document.getElementById("main-heading");
h1.innerHTML="Fruit World";
h1.style.color="orange";

const idselect=document.getElementById("header");
idselect.style.backgroundColor="green";
idselect.style.borderBottom="3px solid orange"

const h2select=document.getElementById("basket-heading");
h2select.style.color="green";

const thanks = document.getElementById("thanks");
thanks.innerHTML="<p>Please visit us again</p>"

const fruit= document.getElementsByClassName('fruit');
fruit[2].style.backgroundColor="orange"

for(let i=0;i<fruit.length;i++){
    fruit[i].style.fontWeight='bold';
}