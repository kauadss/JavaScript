let nome= new String("Kauã da Silva Sobral 200")
let numeros="1, 10, 100, 1000"
console.log(nome)

console.log(nome.search(/sobral/i))

console.log(nome.match(/a/g))

console.log(nome.replace(/S/ig,"Teste"))

console.log(nome.match(/[a-g|l-z|0-99]/))

console.log(nome.match(/\d/ig))
console.log(nome.match(/\s/ig))
console.log(nome.match(/\bP/ig))


console.log(numeros)
console.log(numeros.match(/10/))
console.log(numeros.match(/10+/))
console.log(numeros.match(/10*/))
console.log(numeros.match(/10?/))







