var navbar=document.getElementById("scroll");
window,addEventListener("scroll" ,function(){
    if(scrollY>0) {
        navbar.classList.add("scrolling-active")
    } else if(scrollY==0){
        navbar.classList.remove("scrolling-active")
        navbar.style.transition= "all 2s ease-in-out";
        navbar.style.background = "transparent";
    }
})