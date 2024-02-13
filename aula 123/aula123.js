const p_temp=document.getElementById("p_temp")
const p_nivel=document.getElementById("p_nivel")
const p_press=document.getElementById("p_press")

const endpoint="link"
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
    p_temp.innerHTML=dados.temperatura
    p_nivel.innerHTML=dados.nivel
    p_press.innerHTML=dados.pressao
})