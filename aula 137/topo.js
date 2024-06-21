const body=document.body

const estilotopo=
    "display: flex;"+
    "justify-content: space-between;"+
    "align-items:center;"+
    "background-color: purple;"

const estilo="<link rel='stylesheet' href='topo.css'>"

const topo=document.createElement("div")
topo.setAttribute("id","topo")
topo.setAttribute("style",estilotopo)
body.prepend(topo)

const estiloLogo="width:400px"
const logo=
    "<div id='logo' class='logo'>"+
        "<img src='logo.png' title='Telma' style:'"+estiloLogo+"'/>"+
    "</div>"
topo.innerHTML+=logo

const login=
    "<div id='login' class'login'>"+
        "<p id='matricula'>Matricula:<span></span></p>"+
        "<p id='nome'>Nome:<span><span></p>"+
    "</div>"
topo.innerHTML+=login
