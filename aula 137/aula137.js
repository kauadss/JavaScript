const config={
    cor:"#48f"
}
const cxmsg=new Cxmsg(config)

const btn_mostrarcxmsg=document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2=document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3=document.getElementById("btn_mostrarcxmsg3")


btn_mostrarcxmsg.addEventListener("click",()=>{
    cxmsg.mostrar("CFB cursos", "Curso de JavaScript")
})

btn_mostrarcxmsg2.addEventListener("click",()=>{
    cxmsg.mostrar("Youtube", "Canal CFB")
})

btn_mostrarcxmsg3.addEventListener("click",()=>{
    cxmsg.mostrar("JavaScript", "Aula nova")
})