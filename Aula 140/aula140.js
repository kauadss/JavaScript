const disp=document.querySelector("#disp")
const qal=document.querySelector("#qal")
const per=document.querySelector("#per")

let dados={
    _disponibilidade:0,
    _qualidade:0,
    _performance:0,
    set valores(val){
        this._disponibilidade=val.disponibilidade
        this._qualidade=val.qualidade
        this._performance=val.performance
        disp.innerHTML=this._disponibilidade
        qal.innerHTML=this._qualidade
        per.innerHTML=this._performance
    },
    get valores(){
        return [this._disponibilidade,this._qualidade,this._performance]
    }
}
const buscarDados=()=>{
const endpoint="https://696a4d85-3ab5-4fff-8767-c74c3aa19421-00-2qpx9zoyw8e4k.picard.replit.dev/"
fetch(endpoint)
.then(res=>res.json())
.then(res=>{
    dados.valores=res
})
}

let intervalo=setInterval(buscarDados,1000)

console.log(dados.valores)