
function handleFormSubmit(event){
    event.preventDefault();
    let obj={
        username:event.target.username.value,
        email:event.target.email.value,
        phone:event.target.phone.value,
    };
  
    let a=JSON.stringify(obj);
    
localStorage.setItem("User Details" ,a);
}

module.exports=handleFormSubmit;