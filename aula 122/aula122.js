const endpoint="link"

fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})


