const nome=Symbol("nome")
const numero=Symbol("numero")
const corUniforme=Symbol("Cor do uniforme")

const Jogador={
    nome:"Jogador 1"
}

Jogador[numero]=10,
Jogador[corUniforme]="amarelo"

for(p in Jogador){
    console.log(p)
}

console.log(Jogador.nome)
console.log(Jogador[numero])
console.log(Jogador[corUniforme])

