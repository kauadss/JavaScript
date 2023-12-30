const telcasNumericas=[...document.querySelectorAll(".num")] 
const teclasOp=[...document.querySelectorAll(".op")]
const teclaRes=document.querySelector(".res")
const display=document.querySelector(".display")
const OnOff=document.getElementById("ton")
const limpar=document.getElementById("tcelar")
const tigual=document.getElementById("tigual")


let sinal=false
let decimal=false

telcasNumericas.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal=false
        if(evt.target.innerHTML==","){
           if(!decimal){
            decimal=true
            if(display.innerHTML=="0"){
                display.innerHTML="0,"
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
           } }else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
        display.innerHTML+=evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal=true
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){
                display.innerHTML+="*"
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

limpar.addEventListener("click",(evt)=>{
    sinal=false
    decimal=false
    display.innerHTML="0"
})

tigual.addEventListener("click",(evt)=>{
    sinal=false
    decimal=false
    const res=eval(display.innerHTML)
    display.innerHTML=res
})