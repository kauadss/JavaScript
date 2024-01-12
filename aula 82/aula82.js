const palco=document.getElementById("palco")
const num_objetos=document.getElementById("num_objetos")
const txt_qtde=document.getElementById("txt_qtde")
const btn_add=document.getElementById("btn_add")
const btn_remover=document.getElementById("btn_remover")

let LarguraPalco=palco.offsetWidth
let AlturaPalco=palco.offsetHeight
let bolas=[]
let numBola=0

window.addEventListener("relize",(evt)=>{
    larguraPalco=palco.offsetWidth
    AlturaPalco=palco.offsetHeight
})