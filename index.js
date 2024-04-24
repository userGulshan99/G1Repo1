
let sel=document.querySelectorAll('li');

for(let i=0;i<sel.length;i++){
    let button=document.createElement('button');
    let btnText=document.createTextNode('edit');
    button.className='edit-btn';
    button.appendChild(btnText);
    sel[i].appendChild(button);
}

let form=document.querySelector('form');
let list=document.getElementsByClassName('fruits');

form.addEventListener('submit',function (event) {
    event.preventDefault();
    let fv=document.getElementById("fruit-to-add");
    let ele=document.createElement("li");
    let text=document.createTextNode(fv.value);
    ele.appendChild(text);
    ele.className="fruit";
    
    let bttn=document.createElement('button');
    bttn.type="submit";
    bttn.className='delete-btn';
    let btnval=document.createTextNode("x");
    bttn.appendChild(btnval);

    let editbtn=document.createElement('button');
    editbtn.className='edit-btn'
    let editText=document.createTextNode('edit');
    editbtn.appendChild(editText);
    ele.appendChild(bttn);
    ele.appendChild(editbtn);
    list[0].appendChild(ele);
    console.log(list);
})

list[0].addEventListener('click',function a(event){
    if(event.target.classList.contains('delete-btn')){
        let parentEle=event.target.parentElement;
        list[0].removeChild(parentEle);
    }
})


