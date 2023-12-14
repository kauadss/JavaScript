const caixa=document.querySelector("#caixa")

const cursos="JavaScript"
const canal="CFB Cursos"
const frases=`Este é o<br/>\n curso de ${cursos} <br/>\n do canal ${canal}`

caixa.innerHTML=frases
console.log(frases)


// const carros=["Polo","Golf","T-cross","HRV"]


// let ul=`<ul>`
// carros.map((el)=>{
//     ul+=`<li>${el}<li/>`
// })
// ul+`/ul`

// caixa.innerHTML=ul