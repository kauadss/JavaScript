const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const bntPesquisar=document.querySelector("#bntPesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=[10,20,5,9,2,50]
p_array.innerHTML=elementos_array

bntPesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML="Valor não encontrado"
     elementos_array.find((e,i)=>{
        if(e==txt_pesquisar.value){
            resultado.innerHTML="Valor encontrado " + e + " na posição " + i 
            return e
        }
     })
})

