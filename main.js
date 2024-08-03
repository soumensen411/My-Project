var istatus = document.querySelector("h1")
var addFriend = document.querySelector(".add")
var remove = document.querySelector(".Remove")
var flag = 0;

addFriend.addEventListener("click",function(){
    istatus.innerHTML="Friend"
    istatus.style.color = "green"
    
    
})
remove.addEventListener("click",function(){

    istatus.innerHTML="Stranger"
    istatus.style.color = "red"
    
})