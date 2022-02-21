database(`CREATE TABLE IF NOT EXISTS USUARIO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(45) not null,
    PASSWORD varchar(30) not null
    )`).then(result => {
    console.log('TABELA USUARIO CRIADA COM SUCESSO');
}).catch(erro => {
    console.log('TABELA USUARIO COM ERRO NA CRIAÇÃO');
    console.log(erro);
});

database(`CREATE TABLE IF NOT EXISTS ADM (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(45) not null,
    PASSWORD varchar(30) not null
    )`).then(result => {
    console.log('TABELA ADM CRIADA COM SUCESSO');
}).catch(erro => {
    console.log('TABELA ADM COM ERRO NA CRIAÇÃO');
    console.log(erro);
});

database(`CREATE TABLE IF NOT EXISTS FORNECEDOR (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    FORNECEDOR varchar(45) not null,
    ENDERECO_ID int not null,
    ADM_ID int not null,
    FOREIGN KEY(ENDERECO_ID) REFERENCES ENDERECO(ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(ADM_ID) REFERENCES ADM(ID) ON DELETE CASCADE ON UPDATE CASCADE
    )`).then(result => {
    console.log('TABELA FORNECEDOR CRIADA COM SUCESSO');
}).catch(erro => {
    console.log('TABELA FORNECEDOR COM ERRO NA CRIAÇÃO');
    console.log(erro);
});

database(`CREATE TABLE IF NOT EXISTS ESTOQUE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    ESTOQUE varchar(45) not null,
    CORREDOR varchar(45),
    LADO varchar(15),
    ADM_ID int not null,
    FOREIGN KEY(ADM_ID) REFERENCES ADM(ID) ON DELETE CASCADE ON UPDATE CASCADE
    )`).then(result => {
    console.log('TABELA ESTOQUE CRIADA COM SUCESSO');
}).catch(erro => {
    console.log('TABELA ESTOQUE COM ERRO NA CRIAÇÃO');
    console.log(erro);
});


database(`CREATE TABLE IF NOT EXISTS PRODUTO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(45) not null,
    VALOR double not null,
    QUANTIDADE int,
    ESTOQUE_ID int not null,
    ADM_ID int not null,
    FORNECEDOR_ID int not null,
    FOREIGN KEY (ESTOQUE_ID) REFERENCES ESTOQUE (ID) on delete cascade on update cascade,
    FOREIGN KEY (ADM_ID) REFERENCES ADM (ID) on delete cascade on update cascade,
    FOREIGN KEY (FORNECEDOR_ID) REFERENCES FORNECEDOR (ID) on delete cascade on update cascade
    )`).then(result => {
    console.log('TABELA PRODUTO CRIADA COM SUCESSO');
}).catch(erro => {
    console.log('TABELA PRODUTO COM ERRO NA CRIAÇÃO');
    console.log(erro);
});

database(`CREATE TABLE IF NOT EXISTS PEDIDO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    VALOR double not null,
    QUANTIDADE_PRODUTO int,
    USER_ID int not null,
    ENDERECO_ID int not null,
    PRODUTO_ID int not null,
    FOREIGN KEY (USER_ID) REFERENCES USER (ID) on delete cascade on update cascade,
    FOREIGN KEY (ENDERECO_ID) REFERENCES ENDERECO (ID) on delete cascade on update cascade,
    FOREIGN KEY (PRODUTO_ID) REFERENCES PRODUTO (ID) on delete cascade on update cascade
    )`).then(result => {
    console.log('TABELA PEDIDO CRIADA COM SUCESSO');
}).catch(erro => {
    console.log('TABELA PEDIDO COM ERRO NA CRIAÇÃO');
    console.log(erro);
});

database(`CREATE TABLE IF NOT EXISTS ESTADO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    ESTADO varchar(45) not null,
    UF char(2)
    )`).then(result => {
    console.log('TABELA ESTADO CRIADA COM SUCESSO');
}).catch(erro => {
    console.log('TABELA ESTADO COM ERRO NA CRIAÇÃO');
    console.log(erro);
});
database(`CREATE TABLE IF NOT EXISTS CIDADE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    CIDADE varchar(45) not null,
    ESTADO_ID int not null,
    FOREIGN KEY(ESTADO_ID) REFERENCES ESTADO(ID) ON DELETE CASCADE ON UPDATE CASCADE
    )`).then(result => {
    console.log('TABELA CIDADE CRIADA COM SUCESSO');
}).catch(erro => {
    console.log('TABELA CIDADE COM ERRO NA CRIAÇÃO');
    console.log(erro);
});

database(`CREATE TABLE IF NOT EXISTS ENDERECO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    BAIRRO varchar(45) not null,
    RUA varchar(45) not null,
    CEP char(8) not null,
    CIDADE_ID int not null,
    FOREIGN KEY(CIDADE_ID) REFERENCES CIDADE(ID) ON DELETE CASCADE ON UPDATE CASCADE
    )`).then(result => {
    console.log('TABELA ENDERECO CRIADA COM SUCESSO');
}).catch(erro => {
    console.log('TABELA ENDERECO COM ERRO NA CRIAÇÃO');
    console.log(erro);
});
