function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

}

const al1=new aluno("Kauã", 50)
al1.dados_arrow()