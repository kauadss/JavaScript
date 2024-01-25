const s1=Symbol()
const s2=Symbol()
const s3=Symbol.for("Exemplo")
const s4=Symbol.for("EX")

console.log(s1)
console.log(s2)

console.log(s1==s2)
console.log(Symbol.keyFor(s3))