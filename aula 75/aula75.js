const numero=document.getElementById("numero")

let promessa=new Promise((resolvido,rejeitado)=>{
    let resultado=false
    let tempo=3000
    setTimeout(()=>{
        if(resultado){
            resolvido("Deu tudo certo")
        }else{
            rejeitado("Deu tudo errado")
        }
    },tempo)
})

promessa.then((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.remove("erro")
    numero.classList.add("ok")
})
promessa.catch((retorno)=>{
    numero.innerHTML=retorno

    numero.classList.remove("ok")
    numero.classList.add("erro")
})


numero.innerHTML="Processando..."