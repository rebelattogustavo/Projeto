inserirRota("/buscar_usuario", (dados, resposta) => {
    console.log(dados);
  
    resposta({ ok: "Requisição efetuada com sucesso" });
  });
  
  inserirRota("/criar_usuario", (dados, resposta) => {
    console.log(dados);
  
    if (!dados.nome) {
      return resposta({ erro: "É necessário preencher o nome" });
    }
  
    if (!dados.nisckname) {
      return resposta({ erro: "É necessário preencher o nickname" });
    }
  
    database(`INSERT INTO USUARIO (nome, sobrenome)
                  VALUES (´${dados.nome}´, ´${dados.nickname}´)`)
      .then((result) => {
        console.log("USUARIO INSERIDO COM SUCESSO"),
          resposta({ message: "Usuario inserido com sucesso!" });
      })
      .catch((erro) => {
        console.log("ERRO AO INSERIR USUARIO"),
          resposta({ message: "Usuario não foi inserido :(" });
      });
  });