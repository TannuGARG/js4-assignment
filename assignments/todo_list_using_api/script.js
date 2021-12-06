
var alltodo=document.getElementById("All");
var pendingtodo=document.getElementById("pend");
var completedtodo=document.getElementById("done");


const api_url = "https://jsonplaceholder.typicode.com/todos";
async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    for (var i=0;i<data.length;i++){
        if(data[i].completed==false){
            
            var tag1=document.createElement("li");
            tag1.innerHTML=data[i].title;
            
            console.log(tag1.innerHTML);
            pendingtodo.appendChild(tag1);

            
           
        }else{
            var tag2=document.createElement("li");
            tag2.innerHTML=data[i].title;
            completedtodo.appendChild(tag2);
           
        }
        // var tag3=document.createElement("li");
        // tag3.innerHTML=data[i].title;
        // alltodo.appendChild(tag3)

       

    }
    
    

}

getapi(api_url);














