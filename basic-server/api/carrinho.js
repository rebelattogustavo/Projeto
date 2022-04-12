inserirRota("/listar_carrinho", function (dados, resposta) {
    console.log(dados)
    database(
      `(SELECT * FROM CARRINHO)`
    )
      .then((result) => {
        resposta(result);
      })
      .catch((erro) => {
        console.log("Erro"); 
        resposta({ erro });
      });
  });