const caixa=document.querySelector("#caixa")

let musicas=new Set(["musica1","musica boa","musica10"])
musicas.add("musica muito legal")
musicas.add("musica1")

console.log(musicas)

musicas.forEach((el)=> {
    caixa.innerHTML+=el + "<br/>"
})
