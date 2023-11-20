function* perguntas(){
    const nome=yield 'Qual seu nome ?'
    const esporte=yield 'Qual seus esporte favorito?'
    return "Seu nome é " + nome + ', seu esporte favorito é ' + esporte
}

const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next("Kauã").value)
console.log(itp.next("Jiu-Jitsu").value)


function* contador(){
    let i=0
    while(true){
        yield i++
    }
}

const itc=contador()
for(let i=0;i<10;i++){
    console.log(itc.next().value)
}
