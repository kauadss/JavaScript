const f_tipoMilitar=document.querySelector("#f_tipoMilitar")
const f_tipoNormal=document.querySelector("#f_tipoNormal")
const f_blindagem=document.querySelector("#f_blindagem")
const f_municao=document.querySelector("#f_municao")
const carros=document.querySelector("#carros")
const bnt_addCarro=document.querySelector("#bnt_addCarro")
const f_nome=document.querySelector("#f_nome")
const f_portas=document.querySelector("#f_portas")


let a_carros=[]

f_tipoMilitar.addEventListener("click",(evt)=>{
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    console.log("teste")
     f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

f_tipoNormal.addEventListener("click",(evt)=>{
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.setAttribute("disabled","disabled")
    f_municao.setAttribute("disabled","disabled")
    console.log("teste")
   
})

const gerenciarExibicaoCarros=()=>{
    carros.innerHTML=""
    a_carros.forEach((c)=>{
    const div=document.createElement("div")
    div.setAttribute("class","carro")
    div.innerHTML=`Nome: ${c.nome}<br/>`
    div.innerHTML+=`Portas: ${c.portas}<br/>`
    div.innerHTML+=`Cor: ${c.cor}<br/>`
    div.innerHTML+=`Blindagem: ${c.blindagem}<br/>`
    div.innerHTML+=`Munição: ${c.municao}<br/>`
    carros.appendChild(div)
    })
}

bnt_addCarro.addEventListener("click",()=>{
    if(f_tipoNormal.checked){
        const c=new Carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    } else{
        const c=new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c)
    }
    gerenciarExibicaoCarros()
})




class Carro{
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=""
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setColor=function(cor){
        this.cor=cor
    }
    veloci=function(vel){
        this.vel=vel
    }
}

class Militar extends Carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem=blindagem
        this.municao=municao
        this.setColor("Verde")
    }
}