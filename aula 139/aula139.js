import { Cxmsg } from "./cxmsg.js"

const config={
    cor:"#48f",
    tipo:"ok",
    textos:["SIM","NÃO"],
    comando_sn:()=>{}
}

const fsim=()=>{
    console.log("Apertou o botão sim")
}

const btn_mostrarcxmsg=document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2=document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3=document.getElementById("btn_mostrarcxmsg3")


btn_mostrarcxmsg.addEventListener("click",()=>{
    config.tipo="ok"
    Cxmsg.mostrar(config,"CFB cursos", "Curso de JavaScript")
})

btn_mostrarcxmsg2.addEventListener("click",()=>{
    config.tipo="sn"
    config.comando_sn=()=>{fsim()}
    Cxmsg.mostrar(config,"Youtube", "Canal CFB")
})

btn_mostrarcxmsg3.addEventListener("click",()=>{
    config.tipo="sn"
    Cxmsg.mostrar(config,"JavaScript", "Aula nova")
})