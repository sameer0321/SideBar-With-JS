let button = document.querySelector(".button")
let button2 = document.querySelector(".button3")
let sidebar = document.querySelector(".Sidebar")
let overlay = document.querySelector(".overlay")

button.addEventListener("click",function(){
     sidebar.classList.add("show");
     overlay.classList.add("show2")
})
button2.addEventListener("click",function(){
    sidebar.classList.remove("show");
    overlay.classList.remove("show2")
})
overlay.addEventListener("click",function(){
    sidebar.classList.remove("show");
    overlay.classList.remove("show2")
})
