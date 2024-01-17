const bnt_url=document.getElementById("bnt_url")
const url=document.getElementById("url")

bnt_url.addEventListener("click",(evt)=>{
    window.location=url.value
})