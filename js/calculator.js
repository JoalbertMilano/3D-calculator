const display = document.getElementById("display");

const btns = document.querySelectorAll(".btn");

let mul = false;
let res = false;
let sum = false;
let str = false;
let stm = false;
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
    str = false;
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

const Multiplicar = () =>{
    sum = false;
    res = false;
    if(qty === ""){
        acm = acm;
        display.value = acm;
    }
    else if(acm === 0 && stm === false){
        acm = parseInt(qty);
        display.value = acm;
        qty = "";
        stm = true;
        console.log("Else if multi");
    }
    else{
        console.log("Else multiplicacion");
        acm *= parseInt(qty);
        display.value = acm;
        qty = "";
    }
    mul = true;
}

const Restar = () =>{
    sum = false;
    mul = false;
    if(qty === ""){
        acm = acm;
        display.value = acm;
    }
    else if (acm === 0 && str === false){
        acm = parseInt(qty) - acm;
        display.value = acm;
        qty = "";
        str = true;
        console.log("ELSE if resta");
    }
    else{
        acm -= parseInt(qty);
        display.value = acm;
        qty = "";
    }
    res = true;
}

const Sumar = () =>{
    res = false;
    mul = false;
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
    if(mul){
        acm *= parseInt(valor);
        display.value = acm;
        qty = "";
        console.log("igual multiplicar");
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
        if(btn.classList.contains("multiplicacion")){
            if(sum){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm += parseInt(valor);
                    display.value = acm;
                    qty = "";
                }
            }
            if(res){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm -= parseInt(valor);
                    display.value = acm;
                    qty = "";
                }
            }
            Multiplicar();
        }
        if(btn.classList.contains("resta")){
            if(mul){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm *= parseInt(valor);
                    display.value = acm;
                    qty = "";
                }
            }
            if(sum){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm += parseInt(valor);
                    display.value = acm;
                    qty = "";
                }
            }
            Restar();
        }
        if(btn.classList.contains("suma")){
            if(mul){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm *= parseInt(valor);
                    display.value = acm;
                    qty = "";
                }
            }
            if(res){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm -= parseInt(valor);
                    display.value = acm;
                    qty = "";
                }
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