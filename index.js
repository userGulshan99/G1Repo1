function handleFormSubmit(event) {
  event.preventDefault();
  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/f39e2c16304f4303ab4faf895bf6564f/appointmentData",
      userDetails
    )
    .then((response) => displayUserOnScreen(response.data))
    .catch((error) => console.log(error));

  // Clearing the input fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}



function displayUserOnScreen(userDetails) {

  const userItem = document.createElement("li");
  userItem.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);

  const userList = document.querySelector("ul");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    userList.removeChild(event.target.parentElement);
    localStorage.removeItem(userDetails.email);  
    deleteDetailsFromCrud(event);

  });

  editBtn.addEventListener("click", function (event) {
    userList.removeChild(event.target.parentElement);
    localStorage.removeItem(userDetails.email);
    document.getElementById("username").value = userDetails.username;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;
    deleteDetailsFromCrud(event);
  });

  
}

function deleteDetailsFromCrud(event){
  axios.get("https://crudcrud.com/api/f39e2c16304f4303ab4faf895bf6564f/appointmentData")
  .then((res)=>{
    console.log(res.data);
      res.data.forEach((a)=>{
        
      if(event.target.parentElement.innerText.includes(a.email || "")){
        let deleteUSerURL ="https://crudcrud.com/api/f39e2c16304f4303ab4faf895bf6564f/appointmentData/" + a._id;
        axios.delete(deleteUSerURL)
      }
    })
  })
  .catch((err)=>console.log(err));
}

function getDetailsFromCrud(){

  axios.get("https://crudcrud.com/api/f39e2c16304f4303ab4faf895bf6564f/appointmentData")
  .then((res)=>{
  res.data.forEach((a)=>{
    displayUserOnScreen(a);
  })
  })
  .catch((err)=>console.log(err));

}

document.body.addEventListener('DOMContentLoaded',getDetailsFromCrud());