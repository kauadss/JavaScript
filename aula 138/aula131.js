import { Cxmsg } from "./cxmsg.js"

const timer=document.getElementById("timer")
const btn_iniciar=document.getElementById("btn_iniciar")
const btn_parar=document.getElementById("btn_parar")
const btn_zerar=document.getElementById("btn_zerar")

let intervalo=null
let tmpini=null

const contador=()=>{
    const tmpatual=Date.now()
    const cont=tmpatual-tmpini
    let seg=(tmpatual-tmpini)/1000 
    timer.innerHTML=converter(seg)
}

const converter=(seg)=>{
    let hora=Math.floor(seg/3600) //3600 são a quantidades de segundos em uma hora
    let resto=seg%3600
    let minutos=Math.floor(resto/60)
    let segundos=Math.floor(resto%60)
    let form=(hora<10?"0"+hora:hora)+":"+(minutos<10?"0"+minutos:minutos)+":"+(segundos<10?"0"+segundos:segundos)

    return form
}


btn_iniciar.addEventListener("click",(evt)=>{
    tmpini=Date.now()
    intervalo=setInterval(contador,1000)
})

btn_parar.addEventListener("click",(evt)=>{
    clearInterval(intervalo)
})

btn_zerar.addEventListener("click",(evt)=>{
    tmpini=Date.now()
    timer.innerHTML="00:00:00"
    clearInterval(intervalo)
    Cxmsg.mostrar("Zerar", "O cronometro foi zerado")
})