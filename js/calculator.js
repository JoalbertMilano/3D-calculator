const display = document.getElementById("display");

const btns = document.querySelectorAll(".btn");

let opt = true;
let qt1 = "";
let qt2 = "";
let acm = 0;

const Cantidad = (num) =>{
    if(opt){
        qt1 = qt1 + num;
    
        return qt1;
    }
}

const Sumar = () =>{
    if(qt1 === ""){
        acm = acm;
    }
    else{
        acm = acm + parseInt(qt1);
        qt1 = "";
        console.log(acm);
        display.value = acm;
    }
}

for(let btn of btns){
    btn.addEventListener("click", ()=>{
        if(btn.classList.contains("num")){
            display.value = Cantidad(btn.value);
        }
        if(btn.classList.contains("sumar")){
            Sumar();
        }
    });

}