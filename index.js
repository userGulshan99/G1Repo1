
const form=document.getElementById('form');
let username=document.getElementById('username');
let email=document.getElementById('email');
let phone=document.getElementById('phone');

form.addEventListener('submit',function(event){
    event.preventDefault();
    
    localStorage.setItem("Username",username.value);
    localStorage.setItem("Email",email.value);
    localStorage.setItem("Phone",phone.value);
})
