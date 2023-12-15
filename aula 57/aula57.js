class Pessoa{
    constructor(parametro){
        this.nome=parametro
    }
}

let p1=new Pessoa("Kauã")
let p2=new Pessoa("Bruno")
let p3=new Pessoa(200)

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)