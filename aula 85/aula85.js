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
        this.velx=Math.floor(Math.random()*2)+0.5
        this.vely=Math.floor(Math.random()+2)+0.5
        this.dirx=(Math.randon()*10)>5?1:-1
        this.diry=(Math.randon()*10)>5?1:-1
        this.palco=palco
        this.arrayBolas=arrayBolas
        this.id=Date.now()+"_"+Math.floor(Math.random()*100000000)
        this.desenhar()
        this.controle=setInterval(this.controlar,10)
        this.eu=document.getElementById(this.id)
        numBola++
        num_objetos.innerHTML=numBola
    }

MinhaPos=()=>{
    return this.arrayBolas.indexOF(this)
}

remover=()=>{
    clearInterval(this.controle)
    bolas=bolas.filter((b)=>{
        if(b.id!=this.id){
            return b
        }
    })
    this.eu.remove()
    numBola--
    num_objetos.innerHTML=numBola

}

desenhar=()=>{
    const div=document.createElement("div")
    div.setAttribute("id",this.id)
    div.setAttributeNode("class","bola")
    div.setAttribute("style",`left:${this.px};top:${this.py};width:${this.tam};height:${this.tam};background-color:rgb(${this.r},${this.g},${this.b})`)
    this.palco.appendChild(div)  
}

controlar=()=>{
}

}

window.addEventListener("relize",(evt)=>{
    larguraPalco=palco.offsetWidth
    AlturaPalco=palco.offsetHeight
})