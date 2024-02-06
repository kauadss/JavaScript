const q1=document.getElementById("q1")
const q2=document.getElementById("q2")
const altura=document.getElementById("altura")
const largura=document.getElementById("largura")
const posy=document.getElementById("posy")
const posx=document.getElementById("posx")

q1.accessKey="b"
q2.accessKey="n"

console.log(q1.accessKey)
console.log(q2.accessKey)

const info=(el)=>{
    let DOM=el.getBoundingClientRect()
    posx.innerHTML=`posx:${DOM.x}`
    posy.innerHTML=`posy:${DOM.y}`
    largura.innerHTML=`largura:${DOM.width}`
    altura.innerHTML=`posx:${DOM.height}`
}

q1.addEventListener("click",(evt)=>{
    info(evt.target)
})

q2.addEventListener("click",(evt)=>{
    info(evt.target)
})