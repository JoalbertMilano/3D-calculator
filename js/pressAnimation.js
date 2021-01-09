const botones = document.querySelectorAll(".btn");

for(let boton of botones){
    let borderLeft = boton.firstElementChild;
    let borderBottom = boton.lastElementChild;
    boton.addEventListener("click", ()=>{
        boton.classList.add("btn-active");
        borderLeft.classList.add("btn-brd-l-active");
        borderBottom.classList.add("btn-brd-b-active");
    });
    boton.addEventListener("webkitAnimationEnd", ()=>{
        boton.classList.remove("btn-active");
        borderLeft.classList.remove("btn-brd-l-active");
        borderBottom.classList.remove("btn-brd-b-active");
    });
}
