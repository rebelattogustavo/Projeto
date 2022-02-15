database(`CREATE TABLE IF NOT EXISTS USUARIO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(45),
    PASSWORD varchar(30)
    )`).then(result => {
    console.log('TABELA USUARIO CRIADA COM SUCESSO');
}).catch(erro => {
    console.log('TABELA USUARIO COM ERRO NA CRIAÇÃO');
    console.log(erro);
});