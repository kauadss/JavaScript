const pessoa={
    nome:"bruno",
    canal:"CFB Cursos",
    curso:"JavaScript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"Condicional"
    }
}

const string_pessoa='{"nome":"bruno","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

const s_jason_pessoa=JSON.stringify(pessoa)
const o_jason_pessoa=JSON.parse(string_pessoa)


console.log(pessoa)
console.log("-------------------")
console.log(s_jason_pessoa)
console.log("-------------------")
console.log(o_jason_pessoa)