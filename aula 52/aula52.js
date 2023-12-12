const caixa=document.querySelector("#caixa")

let cursos=["HTML","CSS","JavaScript"]

console.log(cursos)

cursos.map((el)=>{
    let p=document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})

