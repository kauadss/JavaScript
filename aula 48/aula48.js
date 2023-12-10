const p_array=document.querySelector("#array")
const bntVerificar=document.querySelector("#bntVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[30,20,45,39,22,50]
p_array.innerHTML="["+elementos_array+"]"

bntVerificar.addEventListener("click",(evt)=>{
        elementos_array.every((e,i)=>{
        if(e>=18){
            resultado.innerHTML="ok"
        } else{
            resultado.innerHTML="Array não conforme na posição " +i
        }
    })
})

