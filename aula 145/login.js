class Login{
    static logado=false;
    static matLogado=null;
    static nomeLogado=null;
    static accessoLogado=null;
    static estilocss=null
    static endpoint="https://b3f1dd8b-d8d6-4d26-8c27-dba46e0bef15-00-2vy0e81ohju12.kirk.replit.dev/";
    //https://b3f1dd8b-d8d6-4d26-8c27-dba46e0bef15-00-2vy0e81ohju12.kirk.replit.dev/?matricula=123&senha=321 tem que ser no replit (a parte da ?matricula e na barra ao lado do link )

    static login=(mat,pas)=>{
        this.endpoint+=`?matricula=${mat}&senha=${pas}`;
        this.estilocss=
        ".fundoLogin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.75);box-sizing: border-box;}"+
        
        ".baseLogin{display: flex;justify-content: center;align-items: stretch;width: 50%;box-sizing: inherit;"+
        
        ".elementosLogin{display: flex;justify-content: center;align-items: flex-start;flex-direction: column;width: 50%;background-color: #eee;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}"+
        
        ".logoLogin{display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;padding: 10px;border-radius: 0px 10px 10px 0px;box-sizing: inherit;}"+
        
        ".logoLogin img{width: 40%;box-sizing: inherit;}"+
        
        ".camposLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;margin-bottom: 10px;}"+
        
        ".camposLogin label{font-size: 15px;}"+
        
        ".camposLogin input{font-size: 15px;padding: 5px;background-color: #fff;border-radius: 5px;}"
        
        ".botoesLogin{display: flex;justify-content: space-around;align-items: flex-start;width: 100%;box-sizing: inherit;}"+
        
        ".botoesLogin button{cursor: pointer;background-color: rgb(57, 57, 58);color: #fff;border-radius: 5px;padding: 10px;width: 100px;box-sizing: inherit;}"

        const styleEstilo = document.createElement("style");
        styleEstilo.setAttribute("id", "id_estiloLogin");
        styleEstilo.setAttribute("rel", "stylesheet");
        styleEstilo.innerHTML=this.estilocss;
        document.head.appendChild(styleEstilo)

        // fetch(this.endpoint)
        // .then(res=>res.json())
        // .then(res=>{
        //     if(res){
        //         this.logado=true;
        //         this.matLogado=mat;
        //         this.nomeLogado=res.nome;
        //         this.accessoLogado=res.acesso;
        //         console.log(res)
        //     }else{
        //         console.log("Usuario não encontrado")
        //     }
        // })
    }
}

export {Login};