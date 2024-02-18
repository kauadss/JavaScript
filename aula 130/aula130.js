const timer=document.getElementById("timer")

const tmpini=Date.now()

const contador=()=>{
    const tmpatual=Date.now()
    const cont=tmpatual-tmpini
    let seg=(tmpatual-tmpini)/1000 
    timer.innerHTML=converter(seg)
}

const converter=(seg)=>{
    let hora=Math.floor(seg/3600) //3600 são a quantidades de segundos em uma hora
    let resto=seg%3600
    let minutos=Math.floor(resto/60)
    let segundos=Math.floor(resto%60)
    let form=(hora<10?"0"+hora:hora)+":"+(minutos<10?"0"+minutos:minutos)+":"+(segundos<10?"0"+segundos:segundos)

    return form
}

setInterval(contador,1000)