const filtro18=(valor)=>{
    if(valor >= 18)
        return valor
}

// Pode ser usando o metodo a cima e ligando no maior=idades ou com função anonima !!

const idades=[15,17,20,40,80]
//const maior=idades.filter(filtro18)
const maior=idades.filter((val,ind,arr)=>{
    if(val >= 18)
    return val
})

const menor=idades.filter((val,ind,arr)=>{
    if(val < 18)
    return val
})



console.log(idades)
console.log(maior)
console.log(menor)

