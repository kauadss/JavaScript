const objetos=document.getElementById("objetos")

const computador={
    cpu:"",
    ram:"",
    hd:"",
    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD:${this.hd}`)
    }
}

computador["monitor"]="20pol"
computador.PlacaVideo="rtx"

const c1=Object.assign({},computador)
console.log(computador)
c1.info()

const c2=Object.create(computador)
c2.info()

const o1={obj:"1"}
const o2={obj:"2"}
const o3={obj:"3"}
const o4=Object.assign(o1,o2,o3)
console.log(o4)

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