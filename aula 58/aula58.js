class Carro{
    constructor(pnome,ptipo){
        this.nome=pnome
        if(ptipo==1){
            this.tipo="Esportivo"
            this.velmax=300
        }else if(ptipo==2){
            this.tipo="Utilitário"
            this.velmax=100
        }else if(ptipo==3){
            this.tipo="Passeio"
            this.velmax=160
        }else{
            this.tipo="Militar"
            this.velmax=180
        }
    }

setnome(nome){
    this.nome=nome
}

getinfo(){
    return[this.nome,this.tipo,this.velmax]
}

info(){
    console.log(`Nome.: ${this.nome}`)
    console.log(`Tipo.: ${this.tipo}`)
    console.log(`V.Max: ${this.velmax}`)
    console.log(`-------------------------`)
}
}



let c1=new Carro("rapido",1)
let c2=new Carro("Super luxo",2)
let c3=new Carro("carrego tudo",3)
let c4=new Carro("bombadão",4)

// c1.setnome("Zentorno")
// console.log(c1)
c1.info()
c2.info()

// console.log(c1.getinfo())