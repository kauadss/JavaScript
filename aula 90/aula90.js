const objetos=document.getElementById("objetos")

const computador={
    cpu:"i9",
    ram:"64gb",
    hd:"2tb",
    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD:${this.hd}`)
    }
}

computador["monitor"]="20pol"
computador.PlacaVideo="rtx"

console.log(computador)

const computadores=[
    {
        cpu:"i9",
        ram:"64gb",
        hd:"2tb",
    },
    {
        cpu:"i5",
        ram:"32gb",
        hd:"4tb",
    },
    {
        cpu:"i3",
        ram:"4gb",
        hd:"200gb",
    }
]

computadores.forEach((c)=>{
    const div=document.createElement("div")
    div.innerHTML=c.cpu+"<br>"+c.ram+"<br/>"+c.hd
    div.setAttribute("class","computador")
    objetos.appendChild(div)
})