const display = document.getElementById("display");

const btns = document.querySelectorAll(".btn");

let div = false;
let mul = false;
let res = false;
let sum = false;

let sts = false;
let std = false;
let stm = false;
let str = false;

let qty = "";
let vle = "";
let acm = 0;

const Cantidad = (num) =>{
    qty = qty + num;
    vle = qty;
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

const Raiz = () =>{
    if(qty === "" && sts === false){
        acm = acm;
        display.value = acm;
        console.log("IF");
    }
    else{
        qty = Math.sqrt(qty);
        display.value = qty;
        vle = qty;
        sts = true;
        console.log("ELSE IF");
    }
}

const Dividir = () =>{
    mul = false;
    res = false;
    sum = false;
    if(qty === ""){
        acm = acm;
        display.value = acm;
    }
    else if(acm === 0 && std === false){
        acm = parseInt(qty);
        display.value = acm;
        qty = "";
        std = true;
    }
    else{
        acm /= parseInt(qty);
        display.value = acm;
        qty = "";
    }
    div = true;
}

const Multiplicar = () =>{
    div = false;
    res = false;
    sum = false;
    if(qty === ""){
        acm = acm;
        display.value = acm;
    }
    else if(acm === 0 && stm === false){
        acm = parseInt(qty);
        display.value = acm;
        qty = "";
        stm = true;
    }
    else{
        acm *= parseInt(qty);
        display.value = acm;
        qty = "";
    }
    mul = true;
}

const Restar = () =>{
    div = false;
    mul = false;
    sum = false;
    if(qty === ""){
        acm = acm;
        display.value = acm;
    }
    else if (acm === 0 && str === false){
        acm = parseInt(qty) - acm;
        display.value = acm;
        qty = "";
        str = true;
    }
    else{
        acm -= parseInt(qty);
        display.value = acm;
        qty = "";
    }
    res = true;
}

const Sumar = () =>{
    div = false;
    mul = false;
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
        acm += parseInt(vle);
        display.value = acm;
        qty = "";
    }
    if(res){
        acm -= parseInt(vle);
        display.value = acm;
        qty = "";
    }
    if(mul){
        acm *= parseInt(vle);
        display.value = acm;
        qty = "";
    }
    if(div){
        acm /= parseInt(vle);
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
        if(btn.classList.contains("raiz")){
            Raiz();
        }
        if(btn.classList.contains("division")){
            if(mul){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm *= parseInt(vle);
                    display.value = acm;
                    qty = "";
                }
            }
            if(res){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm -= parseInt(vle);
                    display.value = acm;
                    qty = "";
                }
            }
            if(sum){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm += parseInt(vle);
                    display.value = acm;
                    qty = "";
                }
            }
            Dividir();
        }
        if(btn.classList.contains("multiplicacion")){
            if(div){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm /= parseInt(vle);
                    display.value = acm;
                    qty = "";
                }
            }
            if(res){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm -= parseInt(vle);
                    display.value = acm;
                    qty = "";
                }
            }
            if(sum){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm += parseInt(vle);
                    display.value = acm;
                    qty = "";
                }
            }
            Multiplicar();
        }
        if(btn.classList.contains("resta")){
            if(div){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm /= parseInt(vle);
                    display.value = acm;
                    qty = "";
                }
            }
            if(mul){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm *= parseInt(vle);
                    display.value = acm;
                    qty = "";
                }
            }
            if(sum){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm += parseInt(vle);
                    display.value = acm;
                    qty = "";
                }
            }
            Restar();
        }
        if(btn.classList.contains("suma")){
            if(div){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm /= parseInt(vle);
                    display.value = acm;
                    qty = "";
                }
            }
            if(mul){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm *= parseInt(vle);
                    display.value = acm;
                    qty = "";
                }
            }
            if(res){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm -= parseInt(vle);
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