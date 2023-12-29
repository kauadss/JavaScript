const telcasNumericas=[...document.querySelectorAll(".num")] 
const teclasOp=[...document.querySelectorAll(".op")]
const teclaRes=document.querySelector(".res")
const display=document.querySelector(".display")
const OnOff=document.getElementById("ton")
const limpar=document.getElementById("tcelar")


telcasNumericas.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        display.innerHTML+=evt.target.innerHTML
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        display.innerHTML+=evt.target.innerHTML
    })
})

limpar.addEventListener("click",(evt)=>{
    display.innerHTML="0"
})