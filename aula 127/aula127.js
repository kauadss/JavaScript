const texto=document.querySelector("#texto");

const endpoint="texto.txt"

fetch(endpoint)
.then(res=>res.text())
.then(res=>{
    console.log(res);
})