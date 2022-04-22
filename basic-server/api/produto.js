inserirRota("/buscar_produto", (dados, resposta) => {
    database(`SELECT * FROM PRODUTO`)
      .then((result) => {
        resposta(result)
      }).catch((erro) => {
          resposta({resposta: erro})
      });
  });

inserirRota("/remover_produto", (dados, resposta) => {
    console.log("Remover: ",dados);
    database(`DELETE FROM PRODUTO WHERE ID = ${dados.id}`)
      .then((result) => {
        console.log("DELETADO")
        resposta(result)
      }).catch((erro) => {
        console.log(erro)
          resposta({resposta: erro})
      });
  });

inserirRota("/remover_produto_carrinho", (dados, resposta) => {
    console.log("Remover: ",dados);
    database(`DELETE FROM CARRINHO WHERE ID = ${dados.id}`)
      .then((result) => {
        console.log("DELETADO")
        resposta(result)
      }).catch((erro) => {
        console.log(erro)
          resposta({resposta: erro})
      });
  });

inserirRota("/selecionar_produto", (dados, resposta) => {
    console.log("Selecionar: ",dados);
    database(`SELECT * FROM PRODUTO WHERE ID = ${dados.id}`)
      .then((result) => {
        console.log("SELECIONADO")
        resposta(result)
      }).catch((erro) => {
        console.log(erro)
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
  
    database(`INSERT INTO PRODUTO VALUES (null, "${dados.nomeP}", ${dados.preco}, ${dados.qtd}, "${dados.img}" , ${dados.fornecedor_id})`)
      .then((result) => {
        console.log("PRODUTO INSERIDO COM SUCESSO"),
          resposta({ message: "Usuario inserido com sucesso!" });
      })
      .catch((erro) => {
        console.log("ERRO AO INSERIR PRODUTO"),
          resposta({ message: "Usuario não foi inserido :(" });
      });
  });

  inserirRota("/comprar_produto", function (dados, resposta) {
    console.log("Dados comprar: ", dados);
    database(
      `INSERT INTO CARRINHO (ID, QUANTIDADE, ID_PESSOA, ID_PRODUTO) VALUES(null, ${dados.QUANTIDADE}, ${dados.ID_PESSOA}, ${dados.ID_PRODUTO})`
    )
      .then((result) => {
        resposta(result);
      })
      .catch((erro) => {
        console.log("Erro");
        resposta({ erro });
      });
  });