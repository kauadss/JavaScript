const p_texto=document.getElementById("p_texto")
const btn_texto=document.getElementById("btn_texto")
const f_texto=document.getElementById("f_texto")

let num=10
localStorage.setItem("numero",num)
localStorage.setItem("Nome","Kauã")
localStorage.setItem("Nome","Sobral")
alert(localStorage.length)
alert(localStorage.getItem("Nome"))
alert(localStorage.getItem("numero"))