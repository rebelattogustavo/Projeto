inserirRota("/listar_carrinho", function (dados, resposta) {
    database(`SELECT * FROM CARRINHO`)
      .then((result) => {
        resposta(result);
        console.log("Lista carrinho: ", dados)
      })
      .catch((erro) => {
        console.log("Erro"); 
        resposta({ erro });
      });
  });
