const f_nome=document.getElementById("f_nome")
const f_nota=document.getElementById("f_nota")
const f_msg=document.getElementById("f_msg")
const btn_validar=document.getElementById("btn_validar")


btn_validar.addEventListener("click",(evt)=>{
    msg=null

    if(!f_nota.checkValidity()){
        msg=f_nota.validationMessage
    }

    f_msg.innerHTML=msg
    evt.preventDefault()
})