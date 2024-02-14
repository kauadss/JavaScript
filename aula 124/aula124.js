const btn_texto=document.getElementById("btn_texto")

let dados={
    Nome:"Kauã",
    Sobrenome:"Sobral",
    Curso:"JS"
}

let cabecalho={
    method: "Post",
    body:JSON.stringify(dados)
}

const gravarDados=()=>{
    const pontoFinal="link"
    fetch(pontoFinal,cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}

btn_texto.addEventListener("click",()=>{
    gravarDados
})