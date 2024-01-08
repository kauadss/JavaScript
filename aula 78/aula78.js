const div_relogio=document.getElementById("div_relogio")

const relogio=()=>{
    const data=new Date()
    let hora=data.getHours()
    hora=hora<10?"0"+hora:hora
    let minuto=data.getMinutes()
    minuto=minuto<10?"0"+minuto:minuto
    let segundos=data.getSeconds()
    segundos=segundos<10?"0"+segundos:segundos
    const hora_completa=hora+":"+minuto+":"+segundos
    div_relogio.innerHTML=hora_completa
}

const intervalo=setInterval(relogio,1000)
