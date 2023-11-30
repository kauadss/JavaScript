const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]

console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos ")

console.log(caixa1.children[1].innerHTML="Teste")

//console.log(caixa1.children)