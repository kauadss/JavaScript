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

const tirarSelecao=()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=curso
    novoElemento.addEventListener("click",(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento
}
cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado=()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    return cursosSelecionados[0]
}


bntCursoSelecionado.addEventListener("click",(evt)=>{
    try{
    alert ("Curso selecionado: " + cursoSelecionado().innerHTML)
    } catch(ex){
        alert("Selecione um curso")
    }
})

btnRemoveCurso.addEventListener("click",(evt)=>{
    const cs=cursoSelecionado()
    if(cs!=undefined){
    cs.remove()
    }else{
        alert("Selecione um curso")
    }
})

bntAdicionarAntes.addEventListener("click",(evt)=>{
    try{
        if(nomeCurso.value!=""){
        const novoElemento=criarNovoCurso(nomeCurso.value)   
        caixaCursos.insertBefore(novoElemento,cursoSelecionado())
        }else{
            alert("Digite o nome do curso")
        }
    } catch{
        alert("Selecione um curso")
    }
})

bntAdicionarDepois.addEventListener("click",(evt)=>{
    try{
        if(nomeCurso.value!=""){
        const novoElemento=criarNovoCurso(nomeCurso.value)   
        caixaCursos.insertBefore(novoElemento,cursoSelecionado().nextSibling)
    }else{
        alert("Digite o nome do curso")
    }
    } catch{
        alert("Selecione um curso")
    }
})