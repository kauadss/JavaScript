const bnt_soma=document.querySelector("#bnt_soma")
const bnt_subtracao=document.querySelector("#bnt_subtracao")
const bnt_multiplicacao=document.querySelector("#bnt_multiplicacao")
const bnt_divisao=document.querySelector("#bnt_divisao")
const res=document.querySelector("#res")

const op=[
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0])+Number(val[1])
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0])-Number(val[1])
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0])*Number(val[1])
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0])/Number(val[1])
    },
]

bnt_soma.addEventListener("click",op[0])
bnt_subtracao.addEventListener("click",op[1])
bnt_multiplicacao.addEventListener("click",op[2])
bnt_divisao.addEventListener("click",op[3])


