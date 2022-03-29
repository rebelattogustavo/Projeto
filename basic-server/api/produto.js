inserirRota("/buscar_produto", (dados, resposta) => {
    console.log(dados);
    database(`SELECT * FROM PRODUTO`)
      .then((result) => {
        resposta(result)
      }).catch((erro) => {
          resposta({resposta: erro})
      });
  });

  inserirRota("/criar_produto", (dados, resposta) => {
    console.log(dados);
  
    if (!dados.nomeP) {
      return resposta({ erro: "É necessário preencher o nome!" });
    }
    if (!dados.preco) {
      return resposta({ erro: "É necessário preencher o preço!" });
    }
    if (!dados.qtd) {
      return resposta({ erro: "É necessário preencher a quantidade!" });
    }
    if (!dados.img) {
      return resposta({ erro: "É necessário inserir a imagem!" });
    }
    if (!dados.fornecedor_id) {
      return resposta({ erro: "É necessário inserir o id do fornecedor!" });
    }
  
    database(`INSERT INTO PRODUTO VALUES (null, "${dados.nomeP}", "${dados.preco}", "${dados.qtd}", "${dados.img}" , "${dados.fornecedor_id}")`)
      .then((result) => {
        console.log("PRODUTO INSERIDO COM SUCESSO"),
          resposta({ message: "Usuario inserido com sucesso!" });
      })
      .catch((erro) => {
        console.log("ERRO AO INSERIR PRODUTO"),
          resposta({ message: "Usuario não foi inserido :(" });
      });
  });