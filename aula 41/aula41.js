const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","JavaScript","PHP","React","MySQL"]


cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+chave+1)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    const bnt_lixeira=document.createElement("img")
    bnt_lixeira.setAttribute("src","./5525518.png")
    bnt_lixeira.setAttribute("class","btn_lixeira")
     bnt_lixeira.addEventListener("click",(evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })
    novoElemento.appendChild(bnt_lixeira)

   
    caixa1.appendChild(novoElemento)
})

// const novoElemento=document.createElement("div")
// novoElemento.setAttribute("id","c7")
// novoElemento.setAttribute("class","curso c1")
// novoElemento.innerHTML="ReactNative"

// caixa1.appendChild(novoElemento)