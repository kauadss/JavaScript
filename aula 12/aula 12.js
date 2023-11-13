//Ex1

let num1=[10,20,30,40]
let num2=[11,24,38,60]
let num3=[...num1, ...num2]

console.log("n3:" + num3)

//Ex2

let jogador1={nome:"Bruno",energia:100,vidas:3,velocidade:10}
let jogador2={nome:"Kauã",energia:100,vidas:5,magia:30}
let jogador3={...jogador1,...jogador2}

console.log(jogador3)

//Ex3

const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}

let valores=[1,5,4,10]

console.log(soma(...valores))

const obj1=[...document.getElementsByTagName("div")]

console.log(obj1)