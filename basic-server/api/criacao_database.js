database(`CREATE TABLE IF NOT EXISTS TESTE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(45),
    NICKNAME varchar(45)
    )`).then(result => {
    console.log('TABELA TESTE CRIADA COM SUCESSO');
}).catch(erro => {
    console.log('TABELA TESTE COM ERRO NA CRIAÇÃO');
    console.log(erro);
});