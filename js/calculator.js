const display = document.getElementById("display");

const btns = document.querySelectorAll(".btn");

let div = false;
let mul = false;
let res = false;
let sum = false;

let stp = false;
let sta = false;
let ste = false;
let sts = false;
let std = false;
let stm = false;
let str = false;
let sti = false;

let qty = "";
let vle = "";
let acm = 0;
let ptv = 0;

const formatConfig = {
    maximumFractionDigits: 20
  };

const Pantalla = (cod) =>{
    display.value = new Intl.NumberFormat("es-ES", formatConfig).format(cod);
}

const Cantidad = (num) =>{
    qty = qty + num;
    vle = qty;
    return qty;
}

const Porcentaje = () =>{
    if(acm === 0 && stp === false && qty === ""){
        acm = acm;
        qty = "";
        Pantalla(acm);
        console.log("IF");
    }
    else if(qty !== ""){
        if(div || mul){
            qty = qty / 100;
            vle = qty;
            Pantalla(qty);
            console.log("ELSE MUL");
        }
        if(res || sum){
            qty = (qty / 100) * acm;
            vle = qty;
            Pantalla(qty);
            console.log("ELSE SUM");
        }
        console.log("ELSE IF");
    }
    else{
        if(stp === true){
            ptv = acm /100;
            acm = ptv * acm;
            Pantalla(acm);
            stp = false;
            console.log("IF");
        }
        else{
            acm = ptv * acm;
            Pantalla(acm);
            console.log("ELSE");
        }
    }
}

const Limpiar = () =>{
    qty = "";
    Pantalla(0);
}

const Reiniciar = () =>{
    div = false;
    mul = false;
    res = false;
    sum = false;

    stp = false;
    sta = false;
    ste = false;
    sts = false;
    std = false;
    stm = false;
    str = false;
    sti = false;

    qty = "";
    vle = "";
    acm = 0;
    ptv = 0;
    Pantalla(0);
}

const Borrar = () =>{
    const digs = [];
    for(dig of qty){
        digs.push(dig);
    }
    digs.pop();
    if(digs[0] === undefined){
        qty = "";
        Pantalla(0);
    }
    else{
        qty = digs.join("");
        vle = qty;
        Pantalla(qty);
    }
}

const Mediar = () =>{
    if((qty === "" || qty === 0) && sta === false){
        display.value = "Infinity";
    }
    else if(qty === "" && sta === true){
        acm = 1/acm;
        Pantalla(acm);
    }
    else{
        qty = 1/qty;
        Pantalla(qty);
        vle = qty;
    }
}

const Elevar = () =>{
    if(qty === "" && ste === false){
        acm = acm;
        Pantalla(acm);
    }
    else if(qty === "" && ste === true){
        acm **= 2;
        Pantalla(acm);
    }
    else{
        qty **= 2;
        Pantalla(qty);
        vle = qty;
    }
}

const Raiz = () =>{
    if(qty === "" && sts === false){
        acm = acm;
        Pantalla(acm);
    }
    else if(qty < 0 || acm < 0){
        display.value = "Invalid input";
        qty = "";
        vle = 0;
        acm = 0;
    }
    else if(qty === "" && sts === true){
        acm = Math.sqrt(acm);
        Pantalla(acm);
    }
    else{
        qty = Math.sqrt(qty);
        Pantalla(qty);
        vle = qty;
        sts = true;
    }
}

const Dividir = () =>{
    sti = false;
    mul = false;
    res = false;
    sum = false;
    if(qty === ""){
        acm = acm;
        Pantalla(acm);
    }
    else if(acm === 0 && std === false){
        acm = parseFloat(qty);
        Pantalla(acm);
        qty = "";
        std = true;
    }
    else{
        acm /= parseFloat(qty);
        Pantalla(acm);
        qty = "";
    }
    div = true;
}

const Multiplicar = () =>{
    sti = false;
    div = false;
    res = false;
    sum = false;
    if(qty === ""){
        acm = acm;
        Pantalla(acm);
    }
    else if(acm === 0 && stm === false){
        acm = parseFloat(qty);
        Pantalla(acm);
        qty = "";
        stm = true;
    }
    else{
        acm *= parseFloat(qty);
        Pantalla(acm);
        qty = "";
    }
    mul = true;
}

const Restar = () =>{
    sti = false;
    div = false;
    mul = false;
    sum = false;
    if(qty === ""){
        acm = acm;
        Pantalla(acm);
    }
    else if (acm === 0 && str === false){
        acm = parseFloat(qty) - acm;
        Pantalla(acm);
        qty = "";
        str = true;
    }
    else{
        acm -= parseFloat(qty);
        Pantalla(acm);
        qty = "";
    }
    res = true;
}

const Sumar = () =>{
    sti = false;
    div = false;
    mul = false;
    res = false;
    if(qty === ""){
        acm = acm;
        Pantalla(acm);
    }
    else{
        acm += parseFloat(qty);
        Pantalla(acm);
        qty = "";
    }
    sum = true;
}

const Invertir = () =>{
    if(qty === ""){
        if(acm === 0){
            acm = acm;
            Pantalla(acm);
        }
        else{
            acm = -acm;
            Pantalla(acm);
        }
    }
    else{
        qty = -qty;
        vle = qty;
        Pantalla(qty);
    }
}

const Punto = () =>{
    if(qty.includes(".")){
        qty = qty;
        Pantalla(qty);
    }
    else if(qty === ""){
        acm = 0;
        qty = 0 + ".";
        Pantalla(qty);
    }
    else{
        qty = qty + ".";
        Pantalla(qty);
    }
}

const igual = () =>{
    if(sum){
        acm += parseFloat(vle);
        Pantalla(acm);
        qty = "";
    }
    if(res){
        acm -= parseFloat(vle);
        Pantalla(acm);
        qty = "";
    }
    if(mul){
        acm *= parseFloat(vle);
        Pantalla(acm);
        qty = "";
    }
    if(div){
        acm /= parseFloat(vle);
        Pantalla(acm);
        qty = "";
    }
    sta = true;
    ste = true;
    sts = true;
    sti = true;
    stp = true;
}

for(let btn of btns){
    btn.addEventListener("click", ()=>{
        if(btn.classList.contains("num")){
            if(sti){
                div = false;
                mul = false;
                res = false;
                sum = false;
                acm = 0;
            }
            Pantalla(Cantidad(btn.value));
        }
        if(btn.classList.contains("porcentaje")){
            Porcentaje();
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
        if(btn.classList.contains("media")){
            Mediar();
        }
        if(btn.classList.contains("potenciacion")){
            Elevar();
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
                    acm *= parseFloat(vle);
                    Pantalla(acm);
                    qty = "";
                }
            }
            if(res){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm -= parseFloat(vle);
                    Pantalla(acm);
                    qty = "";
                }
            }
            if(sum){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm += parseFloat(vle);
                    Pantalla(acm);
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
                    acm /= parseFloat(vle);
                    Pantalla(acm);
                    qty = "";
                }
            }
            if(res){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm -= parseFloat(vle);
                    Pantalla(acm);
                    qty = "";
                }
            }
            if(sum){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm += parseFloat(vle);
                    Pantalla(acm);
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
                    acm /= parseFloat(vle);
                    Pantalla(acm);
                    qty = "";
                }
            }
            if(mul){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm *= parseFloat(vle);
                    Pantalla(acm);
                    qty = "";
                }
            }
            if(sum){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm += parseFloat(vle);
                    Pantalla(acm);
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
                    acm /= parseFloat(vle);
                    Pantalla(acm);
                    qty = "";
                }
            }
            if(mul){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm *= parseFloat(vle);
                    Pantalla(acm);
                    qty = "";
                }
            }
            if(res){
                if(qty === ""){
                    acm = acm;
                }
                else{
                    acm -= parseFloat(vle);
                    Pantalla(acm);
                    qty = "";
                }
            }
            Sumar();
        }
        if(btn.classList.contains("invertir")){
            Invertir();
        }
        if(btn.classList.contains("punto")){
            Punto(); 
        }
        if(btn.classList.contains("igual")){
            igual();
        }
    });
}