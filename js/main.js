window.addEventListener("scroll", function(){
    const header = document.querySelector(".header");
    let x = window.scrollY;
    if(x > 400){
        header.style.margin = "0"
    }else{
        header.style.margin = "-150px 0 0"
    }
})