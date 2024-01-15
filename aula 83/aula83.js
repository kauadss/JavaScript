const palco=document.getElementById("palco")
const num_objetos=document.getElementById("num_objetos")
const txt_qtde=document.getElementById("txt_qtde")
const btn_add=document.getElementById("btn_add")
const btn_remover=document.getElementById("btn_remover")

let LarguraPalco=palco.offsetWidth
let AlturaPalco=palco.offsetHeight
let bolas=[]
let numBola=0

class Bola{
    constructor(arrayBolas,palco){
        this.tam=Math.floor(Math.random()*15)+10
        this.r=Math.floor(Math.random()*255)
        this.g=Math.floor(Math.random()*255)
        this.b=Math.floor(Math.random()*255)
        this.px=Math.floor(Math.random()*(LarguraPalco-this.tam))
        this.py=Math.floor(Math.random()*(AlturaPalco-this.tam))
    }

}

window.addEventListener("relize",(evt)=>{
    larguraPalco=palco.offsetWidth
    AlturaPalco=palco.offsetHeight
})