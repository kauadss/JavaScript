let el=document.getElementsByTagName("div")
el=[...el]
console.log(el)
el.map((e,i)=>{
    e.innerHTML="Cursos"
}
) //Olhar o inspecionar elemento no html



// const converterInt=(e)=>parseInt(e)
// let num=['1','2','3','4','5'].map(converterInt)
// console.log(num) converteu de texto para numero em sí

// const cursos=['HTML','CSS','JavaScript','PHP','React']
// cursos.map((el,i)=>{
//     console.log("Curso: " + el + "Posição do curso: " + i)
// })