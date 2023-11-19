const f=function(n1,n2){ //função anônima
    return n1+n2
}

console.log(f(10,5))

const a=new Function("v1", "v2","v3", "return v1+v2+v3") //Função construtor anônima

console.log(a(10,5,2))

