const display = document.getElementById("display");

const btns = document.querySelectorAll(".btn");

let sum = false;
let qty = "";
let acm = 0;

const Cantidad = (num) =>{
    qty = qty + num;

    return qty;
}

const Limpiar = () =>{
    qty = "";
    display.value = "0";
}

const Reiniciar = () =>{
    qty = "";
    acm = 0;
    display.value = "0";
}

const Borrar = () =>{
    const digs = [];
    for(dig of qty){
        digs.push(dig);
    }
    digs.pop();
    if(digs[0] === undefined){
        qty = "";
        display.value = "0";
    }
    else{
        qty = digs.join("");
        display.value = qty;
    }
}

const Sumar = () =>{
    if(qty === ""){
        acm = acm;
    }
    else{
        acm = acm + parseInt(qty);
        qty = "";
        display.value = acm;
    }
    sum = true;
}

const Invertir = () =>{
    console.log("Invirtiendo");
}

const igual = () =>{
    if(sum){
        if(qty === ""){
            acm = acm;
        }
        else{
            acm = acm + parseInt(qty);
            qty = "";
            display.value = acm;
        }
        sum = false;
    }

}

for(let btn of btns){
    btn.addEventListener("click", ()=>{
        if(btn.classList.contains("num")){
            display.value = Cantidad(btn.value);
        }
        if(btn.classList.contains("limpiar")){
            Limpiar();
        }
        if(btn.classList.contains("reiniciar")){
            Reiniciar();
        }
        if(btn.classList.contains("borrar")){
            Borrar();
        }
        if(btn.classList.contains("sumar")){
            Sumar();
        }
        if(btn.classList.contains("invertir")){
            Invertir();
        }
        if(btn.classList.contains("igual")){
            igual();
        }
    });

}