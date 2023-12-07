const caixaCursos=document.querySelector("#caixaCursos")
const bnt_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","JavaScript","PHP","React","MySQL","ReacNative"]
const bntCursoSelecionado=document.getElementById("bntCursoSelecionado")
const btnRemoveCurso=document.getElementById("bntRemoverCurso")
const bntAdicionarAntes=document.getElementById("bntAdicionarAntes")
const bntAdicionarDepois=document.getElementById("bntAdicionarDepois")
const nomeCurso=document.getElementById("nomeCurso")


let indice=0

const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=curso

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")

    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb) 

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)

    return novoElemento
}
cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const radioSeleciona=()=>{
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado=todosRadios.filter((ele,ind,arr)=>{
        return ele.checked
    })
    return radioSelecionado[0]
}


bntCursoSelecionado.addEventListener("click",(evt)=>{
    const rs=radioSeleciona()
    if(rs!=undefined){
        const cursoSelecionado=rs.parentNode.previousSibling.textContent
    alert ("Curso selecionado: " + cursoSelecionado)
    } else{
        alert("Selecione um curso")
    }
})

btnRemoveCurso.addEventListener("click",(evt)=>{
    const rs=radioSeleciona()
    if(rs!=undefined){
    const cursoSelecionado=rs.parentNode.parentNode
    cursoSelecionado.remove()
    }else{
        alert("Selecione um curso")
    }
})

bntAdicionarAntes.addEventListener("click",(evt)=>{
    const rs=radioSeleciona()
    try{
        if(nomeCurso.value!=""){
        const cursoSelecionado=rs.parentNode.parentNode
        const novoElemento=criarNovoCurso(nomeCurso.value)   
        caixaCursos.insertBefore(novoElemento,cursoSelecionado)
        }else{
            alert("Digite o nome do curso")
        }
    } catch{
        alert("Selecione um curso")
    }
})

bntAdicionarDepois.addEventListener("click",(evt)=>{
    const rs=radioSeleciona()
    try{
        if(nomeCurso.value!=""){
        const cursoSelecionado=rs.parentNode.parentNode
        const novoElemento=criarNovoCurso(nomeCurso.value)   
        caixaCursos.insertBefore(novoElemento,cursoSelecionado.nextSibling)
    }else{
        alert("Digite o nome do curso")
    }
    } catch{
        alert("Selecione um curso")
    }
})