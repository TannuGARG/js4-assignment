


var input1 = document.querySelector("input");
var press=document.querySelector("button");
var TODO=document.querySelector("div .todos");
var key_val=0;
press.addEventListener("click",function(){
    var item=input1.value ;
    var tag1 = document.createElement("p");
    var key=document.createAttribute("key");
    key.value=key_val;
    tag1.setAttributeNode(key);
    tag1.innerHTML = item;
    TODO.appendChild(tag1)
    key_val+=1
    tag1.addEventListener("click",function(){
        TODO.removeChild(tag1)
    })
    input1.value=""
 

})



