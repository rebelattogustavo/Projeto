const { Database } = require("sqlite3");

inserirRota('/buscar_usuario', function (dados, resposta){
    console.log(dados);

    resposta({ok:'Requisição efetuada com sucesso'})
})

inserirRota('/criar_usuario', 
function name(dados, resposta){
    console.log(dados);

    if (!dados.nome){
        return resposta({ erro: 'É necessário preencher o nome'});
    }

    if (!dados.nickname){
        return resposta({erro: 'É necessário preencher o nickname'})
    }

    database('INSERT INTO USER 
    (NOME, NICKNAME')})