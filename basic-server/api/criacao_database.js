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

database(`CREATE TABLE IF NOT EXISTS MANAGER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(45) not null,
    PASSWORD varchar(30) not null
    )`).then(result => {
    console.log('TABELA MANAGER CRIADA COM SUCESSO');
}).catch(erro => {
    console.log('TABELA MANAGER COM ERRO NA CRIAÇÃO');
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

database(`CREATE TABLE IF NOT EXISTS PRODUTO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(45) not null,
    VALOR double not null,
    QUANTIDADE int,
    BASE64 VARCHAR(9999999999999),
    FORNECEDOR_ID int not null,
    FOREIGN KEY (FORNECEDOR_ID) REFERENCES FORNECEDOR (ID) on delete cascade on update cascade
    )`).then(result => {
    console.log('TABELA PRODUTO CRIADA COM SUCESSO');
}).catch(erro => {
    console.log('TABELA PRODUTO COM ERRO NA CRIAÇÃO');
    console.log(erro);
});

database(`CREATE TABLE IF NOT EXISTS CARRINHO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    QUANTIDADE int not null,
    ID_PESSOA int NOT NULL,
    ID_PRODUTO int NOT NULL,
    FOREIGN KEY (ID_PESSOA) REFERENCES USUARIO (ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (ID_PRODUTO) REFERENCES PRODUTO (ID) ON DELETE CASCADE ON UPDATE CASCADE
)`).then(result => {
    console.log('TABELA CARRINHO CRIADA COM SUCESSO');
}).catch(erro => {
    console.log('TABELA CARRINHO COM ERRO NA CRIAÇÃO');
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
