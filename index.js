let ul=document.getElementsByTagName('ul');

function handleFormSubmit(event){
    event.preventDefault();
    let obj={
        username:event.target.username.value,
        email:event.target.email.value,
        phone:event.target.phone.value,
        
    };
    let a=JSON.stringify(obj);
    
    let li=document.createElement('li');
    let liText=document.createTextNode(a);
    let btn=document.createElement('input');
    btn.type='button';
    btn.value='delete';
  
    li.appendChild(liText);
    li.appendChild(btn);
    ul[0].appendChild(li);
    
    localStorage.setItem(event.target.email.value , a);

    btn.addEventListener('click', function del(event){
        localStorage.removeItem(JSON.parse(event.target.parentElement.textContent).email)
        event.target.parentElement.remove();
    })

}
