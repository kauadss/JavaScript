

/*var nome="Kauã" //pode ser acessado por elementos abaixo (não deveria)

let nome="Kauã" Só é acessado por elementos acima let > var */

function teste(){
    let nome="kauã"
    if(true){
        console.log("Dentro do IF do teste: " + nome)
    }
        console.log("Dentro do teste: " + nome)
}

teste()

// console.log("Fora do teste" + nome) Vai dar erro por ele estar em um escopo anterior ao que o nome foi declarado

