
function addList(url,title,description){

    let li = document.createElement('li');
    li.id = 'list';

    let h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode(title));
    li.appendChild(h2);

    let img = document.createElement('img');
    img.src =  url;
    
    li.appendChild(img);
    li.appendChild(document.createElement('br'));
    li.appendChild(document.createElement('br'));
    li.appendChild(document.createTextNode(description));
    
    li.appendChild(document.createElement('br'));
    li.appendChild(document.createElement('br'));
    
    buttons(li);

    let form = document.querySelector('form');
    form.url.value = '';
    form.title.value = '';
    form.description.value = '';
  
    document.querySelector('ul').appendChild(li);
}


async function buttons(li){
  
    let form = document.querySelector('form');
    let crudValues = await axios.get("https://crudcrud.com/api/80fa517b692b47fb8d6c5d9e679546bf/blogs");
    let data = Array.from(crudValues.data);
  
    let deleteBTn = document.createElement('button');
    deleteBTn.appendChild(document.createTextNode('DELETE BLOG'));
    deleteBTn.style.padding = "2px";
    deleteBTn.style.margin = "5px";
  
    deleteBTn.addEventListener('click', function(e){
        let val = e.target.parentElement.innerText;
        data.forEach((element)=>{
            if(val.includes(element.title || "")){
                axios.delete("https://crudcrud.com/api/80fa517b692b47fb8d6c5d9e679546bf/blogs/"+element._id);
            }
        });
        
        e.target.parentElement.remove();
    })
    
        
    let editBTn = document.createElement('button');
    editBTn.appendChild(document.createTextNode('EDIT BLOG'));
    editBTn.style.padding = "2px";
    editBTn.style.margin = "5px";
   
    editBTn.addEventListener('click', function (e){
      e.preventDefault();
      let val = e.target.parentElement.innerText;

      data.forEach((element)=>{
        if(val.includes(element.title || "")){
          form.url.value = element.url;
          form.title.value = element.title;
          form.description.value = element.description;
          axios.delete("https://crudcrud.com/api/80fa517b692b47fb8d6c5d9e679546bf/blogs/"+element._id);
          e.target.parentElement.remove();
        }

        });
        document.getElementById('post').innerHTML = 'EDIT BLOG';
    })
  
    li.appendChild(editBTn); 
    li.appendChild(deleteBTn);
  }
  

document.querySelector('form')
.addEventListener('submit',(event)=>{
    event.preventDefault();
    let url = event.target.url.value;
    let title = event.target.title.value;
    let description = event.target.description.value;

    addList(url,title,description);

    let crudData = {
        url:url,
        title:title,
        description:description
      }
    
      axios.post("https://crudcrud.com/api/80fa517b692b47fb8d6c5d9e679546bf/blogs", crudData);
      
      document.getElementById('post').innerHTML = 'POST BLOG';

    })


async function get(){
    let data = await axios.get("https://crudcrud.com/api/80fa517b692b47fb8d6c5d9e679546bf/blogs");
    let length = 0;
    Array.from(data.data).forEach((e)=>{
      addList(e.url,e.title,e.description);
      length++;
    })

    document.getElementById('blog-count').innerHTML = `Total Blog: ${length}`
  };
  
document.addEventListener('DOMContentLoaded',get);
  