const botones = document.querySelectorAll(".btn");

for(let boton of botones){
    let borderLeft = boton.firstElementChild;
    let borderBoton = boton.lastElementChild;
    boton.addEventListener("click", ()=>{
        boton.classList.add("btn-active");
        borderLeft.classList.add("btn-brd-l-active");
        borderBoton.classList.add("btn-brd-b-active");
    });
    boton.addEventListener("webkitAnimationEnd", ()=>{
        boton.classList.remove("btn-active");
        borderLeft.classList.remove("btn-brd-l-active");
        borderBoton.classList.remove("btn-brd-b-active");
    });
}
