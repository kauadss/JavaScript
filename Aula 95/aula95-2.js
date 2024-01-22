class Cursos{
    static cursos=["JavaScript","HTML","CSS","Pyton"]

    static getTodosCursos=()=>{
        return this.cursos
    }

    static getCursos=(i_cursos)=>{
        return this.cursos[i_cursos]
    }

    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static apagarCursos=()=>{
        this.cursos=[]
    }
}

 
export default Cursos