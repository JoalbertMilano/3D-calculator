const display = document.getElementById("display");

const btns = document.querySelectorAll(".btn");

let sum = false;
let res = false;
let stt = false;
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
    stt = false;
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

const Resta = () =>{
    sum = false;
    if(qty === ""){
        acm = acm;
        display.value = acm;
    }
    else if (acm === 0 && stt === false){
        acm = parseInt(qty) - acm;
        display.value = acm;
        qty = "";
        stt = true;
    }
    else{
        acm -= parseInt(qty);
        console.log("Else resta");
        console.log("qty = " + qty);
        console.log("acm = " + acm);
        display.value = acm;
        qty = "";
    }
    res = true;
}

const Sumar = () =>{
    res = false;
    if(qty === ""){
        acm = acm;
        display.value = acm;
    }
    else{
        acm += parseInt(qty);
        display.value = acm;
        qty = "";
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
    if(res){
        acm -= parseInt(valor);
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
        if(btn.classList.contains("resta")){
            if(sum){
                acm += parseInt(valor);
                display.value = acm;
                qty = "";
            }
            Resta();
        }
        if(btn.classList.contains("sumar")){
            if(res){
                acm -= parseInt(valor);
                display.value = acm;
                qty = "";
            }
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