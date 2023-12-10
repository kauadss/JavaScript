const p_array=document.querySelector("#array")
const bntVerificar=document.querySelector("#bntVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[18,13,15,22,11]
p_array.innerHTML="["+elementos_array+"]"

bntVerificar.addEventListener("click",(evt)=>{
      const  ret=elementos_array.some((e,i)=>{
        if(e<18){
             resultado.innerHTML="Array não conforme na posição " +i
        }
        return e>=18
    })
    if(ret){
        resultado.innerHTML="ok"
    }
})

