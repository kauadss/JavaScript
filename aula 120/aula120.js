const f_nome=document.getElementById("f_nome")
const f_nota=document.getElementById("f_nota")
const f_msg=document.getElementById("f_msg")
const btn_validar=document.getElementById("btn_validar")


btn_validar.addEventListener("click",(evt)=>{
    let estadoValidacao=f_nota.validity

    if(estadoValidacao.valueMissing){
        f_nota.setCustomValidity("Você precisa preencher esse campo")
    } else if(estadoValidacao.rangeOverflow){
        f_nota.setCustomValidity("Essa nota é maior do que a aceita, digite entre 0 e 10")
    } if(estadoValidacao.rangeUnderflow){
        f_nota.setCustomValidity("Essa nota é menor do que a aceita, digite entre 0 e 10")
    }

    f_nota.reportValidity()
    evt.preventDefault()
})