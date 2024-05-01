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
    li.appendChild(liText);
    ul[0].appendChild(li);
localStorage.setItem( event.target.email.value  , a);
 
}
