const numero=document.getElementById("numero")
const bnt_promessa=document.getElementById("bnt_promessa")

bnt_promessa.addEventListener("click",()=>{
    numero.innerHTML="Processando..."
    promessa()
    .then((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })
    .catch((retorno)=>{
        numero.innerHTML=retorno
    
        numero.classList.remove("ok")
        numero.classList.add("erro")
    })
})


const promessa=()=>{
    let p=new Promise((resolvido,rejeitado)=>{
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
    return p
}

numero.innerHTML="Esperando"