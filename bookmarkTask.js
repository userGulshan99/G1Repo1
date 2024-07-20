

function addList(title,url){

  let li = document.createElement('li');
  li.appendChild(document.createTextNode(title+' > '));

  let anchor = document.createElement('a');
  anchor.href = url;
  anchor.target = '_blank';
  anchor.name = 'anchor';
  anchor.textContent = url;
  li.appendChild(anchor);

  let form = document.querySelector('form');
  form.title.value = '';
  form.url.value = '';
  buttons(li);
  document.querySelector('ul').appendChild(li);
  
}

async function buttons(li){
  
  let form = document.querySelector('form');
  let crudValues = await axios.get("https://crudcrud.com/api/b22a598a6d0d4ea4868f4f993695cc05/bookmarks");
  let data = Array.from(crudValues.data);

  let deleteBTn = document.createElement('button');
  deleteBTn.appendChild(document.createTextNode('delete'));
  deleteBTn.style.padding = "2px";
  deleteBTn.style.margin = "5px";

  deleteBTn.addEventListener('click', function(e){
    e.target.parentElement.remove();
    let val = e.target.parentElement.innerText;
    
    data.forEach((element)=>{
      if(val.includes(element.url)){
           axios.delete("https://crudcrud.com/api/b22a598a6d0d4ea4868f4f993695cc05/bookmarks/"+element._id);
      }
    });
  })
  

  let editBTn = document.createElement('button');
  editBTn.appendChild(document.createTextNode('editBTn'));
  editBTn.style.padding = "2px";
  editBTn.style.margin = "5px";
 
  editBTn.addEventListener('click', function (e){
    e.preventDefault();
    let val = e.target.parentElement.innerText;
    
    data.forEach((element)=>{
      if(val.includes(element.url)){
        form.title.value = element.title;
        form.url.value = element.url;
        axios.delete("https://crudcrud.com/api/b22a598a6d0d4ea4868f4f993695cc05/bookmarks/"+element._id);
        e.target.parentElement.remove();
      }
    });
  })

  li.appendChild(deleteBTn);
  li.appendChild(editBTn);

}


document.querySelector('form')
.addEventListener('submit',(e)=>{
  e.preventDefault();
  let title = e.target.title.value;
  let url = e.target.url.value;

  addList(title,url);

  let crudData = {
    title:title,
    url:url
  }
  axios.post("https://crudcrud.com/api/b22a598a6d0d4ea4868f4f993695cc05/bookmarks", crudData);

});


async function get(){
  let data = await axios.get("https://crudcrud.com/api/b22a598a6d0d4ea4868f4f993695cc05/bookmarks");
  Array.from(data.data).forEach((e)=>{
    addList(e.title,e.url);
  })
};

document.addEventListener('DOMContentLoaded',get);
