inserirRota("/buscar_usuario", (dados, resposta) => {
  console.log(dados);
  database(`SELECT * FROM USUARIO`)
    .then((result) => {
      resposta(result)
    }).catch((erro) => {
        resposta({resposta: erro})
    });
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

inserirRota("/buscar_produto", (dados, resposta) => {
  console.log(dados);
  database(`SELECT * FROM PRODUTO`)
    .then((result) => {
      resposta(result)
    }).catch((erro) => {
        resposta({resposta: erro})
    });
});

// inserirRota('/buscar_usuario', (dados, resposta) => {
//   console.log(dados);
//   database('SELECT * FROM USER').then(result => {
//       resposta({ list: result });
//   }).catch(erro => {
//       resposta({ resposta: erro });
//   });
// });

inserirRota("/login", (dados, resposta) => {
  database(`SELECT * FROM USUARIO WHERE NOME = "${dados.nome}" AND
            PASSWORD = "${dados.password}"`)
    .then((result) => {
      resposta({ list: result })
    })
    .catch((erro) => {
      console.log(erro),
        console.log("ERRO AO INSERIR USUARIO"),
        resposta({ message: "Usuario não foi inserido :(" });
    });
});

inserirRota("/criar_usuario", (dados, resposta) => {
  if (!dados.nome) {
    return resposta({ erro: "É necessário preencher o nome" });
  }
  if (!dados.password) {
    return resposta({ erro: "É necessário preencher a senha" });
  }

  database(`INSERT INTO USUARIO (nome, password)
                  VALUES ("${dados.nome}", "${dados.password}")`)
    .then((result) => {
      console.log("USUARIO INSERIDO COM SUCESSO"),
        resposta({ message: "Usuario inserido com sucesso!" });
    })
    .catch((erro) => {
      console.log("ERRO AO INSERIR USUARIO"),
        resposta({ message: "Usuario não foi inserido :(" });
    });
});

inserirRota("/criar_produto", (dados, resposta) => {
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

//   fetch('/api/buscar_usuario',
//     {
//         method: 'POST',
//         body: JSON.stringify(
//             {
//                 nome: 'sim', nickname: "sim"
//             }
//         ),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
// ).then(function (result){
//     return result.json();
// }).then(function (dados){
//     console.log(dados);
// }).catch(function(erro){
//   console.log(erro);
// })