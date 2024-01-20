const cursos=["JavaScript","HTML","CSS","Pyton"]

export default function getTodosCursos(){
    return cursos
}

function getCurso(i_curso){
    return cursos[i_curso]
}

export{cursos}
export{getCurso}