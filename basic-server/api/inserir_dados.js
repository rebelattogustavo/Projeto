database(`INSERT INTO MANAGER (NOME, PASSWORD)  
VALUES('a', 'a')`).then(result => {
console.log('DADOS INSERIDOS COM SUCESSO');
}).catch(erro => {
console.log('DADOS NÃO INSERIDOS');
console.log(erro);
});


