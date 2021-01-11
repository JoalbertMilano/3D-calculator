const display = document.getElementById("display");

const btns = document.querySelectorAll(".btn");

let sum = false;
let qty = "";
let acm = 0;
let valor = "";

const Cantidad = (num) =>{
    qty = qty + num;
    valor = qty;
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
        display.value = acm;
        console.log("IF de Sumar()");
    }
    else{
        acm += parseInt(qty);
        display.value = acm;
        qty = "";
        console.log("ELSE de Sumar()");
    }
    sum = true;
}

const Invertir = () =>{
    if(qty === ""){
        acm = -acm;
        display.value = acm;
    }
    else{
        qty = -qty;
        display.value = qty;
    }
}

const igual = () =>{
    if(sum){
        acm += parseInt(valor);
        display.value = acm;
        qty = "";
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