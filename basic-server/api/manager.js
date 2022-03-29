database(`INSERT INTO MANAGER (nome, password)
VALUES ("a", "a")`)
.then((result) => {
console.log("USUARIO INSERIDO COM SUCESSO");
})
.catch((erro) => {
console.log("ERRO AO INSERIR USUARIO");
});

inserirRota("/buscar_manager", (dados, resposta) => {
    console.log(dados);
    database(`SELECT * FROM MANAGER`)
      .then((result) => {
        resposta(result)
      }).catch((erro) => {
          resposta({resposta: erro})
      });
  });

database(`INSERT INTO MANAGER (nome, password)
VALUES ("a", "a")`)
.then((result) => {
console.log("USUARIO INSERIDO COM SUCESSO");
})
.catch((erro) => {
console.log("ERRO AO INSERIR USUARIO");
});