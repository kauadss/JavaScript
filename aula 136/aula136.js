const config={
    titulo:"Teste",
    texto:"CFB cursos",
    cor:"#48f"
}
const cxmsg=new Cxmsg(config)

const btn_mostrarcxmsg=document.getElementById("btn_mostrarcxmsg")

btn_mostrarcxmsg.addEventListener("click",()=>{
    cxmsg.mostrar()
})