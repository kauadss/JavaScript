const cursostodos=[...document.getElementsByClassName("curso")]
const cursosC1=[...document.getElementsByClassName("c1")]
const cursosC2=[...document.getElementsByClassName("c2")]
const cursoespecial=document.getElementsByClassName("curso")[6]

console.log(cursostodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoespecial)

cursosC2.map((el)=>{
    el.classList.add("destaque")
})