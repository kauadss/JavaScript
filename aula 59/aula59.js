class Pessoa{
    constructor(pnome,pIdade){
        this.nome=pnome
        this.idade=pIdade
}

getnome(){
    return this.nome
}

getidade(){
    return this.idade
}

setnome(nome){
    this.nome=nome
}

setnome(idade){
    this.idade=idade
}


info(){
    console.log(`Nome.: ${this.nome}`)
    console.log(`idade.: ${this.idade}`)
    console.log(`-------------------------`)
    }
}

let pessoas=[]
const bnt_adicionar=document.querySelector("#bnt_adicionar")
const res=document.querySelector(".res")

const addPessoas=()=>{
    res.innerHTML=""
    pessoas.map((p)=>{
        const div=document.createElement("div")
        div.setAttribute("class","pessoa")
        div.innerHTML=`Nome:${p.getnome()}<br/>Idade:${p.getidade()}`
        res.appendChild(div)
    })
}

bnt_adicionar.addEventListener("click",(evt)=>{
    const nome=document.querySelector("#f_nome")
    const idade=document.querySelector("#f_idade")
    const p=new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value=""
    idade.value=""
    nome.focus()
    addPessoas()
})