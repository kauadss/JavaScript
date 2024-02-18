const timer=document.getElementById("timer")

const tmpini=Date.now()

const contador=()=>{
    const tmpatual=Date.now()
    const cont=tmpatual-tmpini
    let seg=Math.floor((tmpatual-tmpini)/1000)
    console.log(seg)
}

setInterval(contador,10000)