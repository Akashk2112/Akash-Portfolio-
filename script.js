var menubtn = document.querySelector(".menu");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li")
menubtn.addEventListener("click",() => {
    ul.classList.toggle("nav_List")
   
})
list.forEach((item) => {
    item.addEventListener('click', () => {
        ul.classList.toggle("nav_List");
        
    });
});   

var crsr = document.querySelector(".cursor")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})