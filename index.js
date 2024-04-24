


// Add input element inside form, before button, to take fruit description
const form=document.querySelector('form');
const description_button=document.createElement('input');
description_button.id='description';
let lastnode=form.lastElementChild;
form.insertBefore(description_button,lastnode);

// Show the fruit description in italics on the next line
const list=document.querySelector('.fruits');

form.addEventListener('submit',function (event) {
    event.preventDefault();
    // created list element
    let ele=document.createElement("li");
    ele.className="fruit";

    // fruit name appending to the li child
    let fruit_input=document.getElementById("fruit-to-add");
    let text=document.createTextNode(fruit_input.value);
    ele.appendChild(text);
    
    // created para for description
    let parafordescr=document.createElement('p');
    let descr=document.getElementById('description');
    let descrText=document.createTextNode(descr.value);
    parafordescr.appendChild(descrText);
    parafordescr.style.fontStyle='italic';
    ele.appendChild(parafordescr);
    list.appendChild(ele);
})

let search=document.getElementById('filter');

search.addEventListener('keyup',function(event){
    let searching_value=search.value.toLowerCase();

    const liEle = document.getElementsByClassName('fruit')

    for(let i=0;i<liEle.length;i++){
        let list_value=liEle[i].innerText.toLowerCase();

        if(list_value.includes(searching_value)){
            liEle[i].style.display="flex";
        }else{
            liEle[i].style.display="none";
        }
    }
})