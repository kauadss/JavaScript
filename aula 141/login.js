class Login{
    static logado=false;
    static matLogado=null;
    static nomeLogado=null;
    static accessoLogado=null;
    static endpoint="https://b3f1dd8b-d8d6-4d26-8c27-dba46e0bef15-00-2vy0e81ohju12.kirk.replit.dev/";
    //https://b3f1dd8b-d8d6-4d26-8c27-dba46e0bef15-00-2vy0e81ohju12.kirk.replit.dev/?matricula=123&senha=321 tem que ser no replit (a parte da ?matricula e na barra ao lado do link )

    static login=(mat,pas)=>{
        this.endpoint+=`?matricula=${mat}&senha=${pas}`;
        fetch(this.endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado=true;
                this.matLogado=mat;
                this.nomeLogado=res.nome;
                this.accessoLogado=res.acesso;
                console.log(res)
            }else{
                console.log("Usuario não encontrado")
            }
        })
    }
}

export {Login};