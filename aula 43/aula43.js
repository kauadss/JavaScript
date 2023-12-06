const caixaCursos=document.querySelector("#caixaCursos")
const bnt_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","JavaScript","PHP","React","MySQL","ReacNative"]
const bntCursoSelecionado=document.getElementById("bntCursoSelecionado")

cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")

    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

bntCursoSelecionado.addEventListener("click",(evt)=>{
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado=todosRadios.filter((ele,ind,arr)=>{
        return ele.checked
    })
    
    radioSelecionado=radioSelecionado[0]
    const cursoSelecionado=radioSelecionado.parentNode.previousSibling.textContent
    alert ("Curso selecionado: " + cursoSelecionado)
    // console.log(todosRadios)
    // console.log(radioSelecionado)
    // console.log(cursoSelecionado)

})
