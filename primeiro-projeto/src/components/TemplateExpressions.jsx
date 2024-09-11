const TemplateExpressions = ()=>{
    let nome = "meu nome"
    let aluno = {
        nome: "pedro",
        idade: 32,
        turma: "Do ratinho"
    }

    return(
        <div>
            <h1>Olá {nome}</h1>
            <h2>Seu nome é "{aluno.nome}"</h2>
            <h2>Sua idade é "{aluno.idade}"</h2>
            <h2>Sua turma é "{aluno.turma}"</h2>
        </div>
    )
}

export default TemplateExpressions