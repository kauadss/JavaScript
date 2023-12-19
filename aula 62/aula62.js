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

class esportivo extends Carro{
    constructor(nome,portas,lugares){
        super(nome,portas)
        this.lugares=lugares
        this.setColor("Preto")
        this.veloci(200)
    }
}

const c1=new esportivo("Zorruso",2,4)
c1.ligar()

console.log(`Nome: ${c1.nome}`)
console.log(`portas: ${c1.portas}`)
console.log(`lugares: ${c1.lugares}`)
console.log(`Cor: ${c1.cor}`)
console.log(`Ligado: ${c1.ligado? "Sim":"Não"}`)
console.log(`Velocidade: ${c1.vel}`)


