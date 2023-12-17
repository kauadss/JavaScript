const pessoa={
    nome:"kauã",
    getNome:function(){
        return this.nome
    }
}

const p2=pessoa
const p3=pessoa

p2["nome"]="Belforoxo"
p3.nome="Armando"

console.log(pessoa.nome)
console.log(p2.nome)
console.log(p3.nome)
