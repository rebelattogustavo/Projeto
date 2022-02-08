inserirRota("/buscar_usuario", (dados, resposta) => {
  console.log(dados);

  database(`SELECT * FROM USUARIO`)
    .then((result) => {
      resposta({ list: result })
    })
    .catch((erro) => {
      console.log(erro),
        console.log("ERRO AO INSERIR USUARIO"),
        resposta({ message: "Usuario não foi inserido :(" });
    });
});

inserirRota("/login", (dados, resposta) => {
  console.log(dados);

  database(`SELECT * FROM USUARIO WHERE NICKNAME = "${dados.nickname}" AND
            `)
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
  console.log(dados);

  if (!dados.nome) {
    return resposta({ erro: "É necessário preencher o nome" });
  }

  if (!dados.nickname) {
    return resposta({ erro: "É necessário preencher o nickname" });
  }
  if (!dados.password) {
    return resposta({ erro: "É necessário preencher a senha" });
  }

  database(`INSERT INTO USUARIO (nome, nickname)
                  VALUES ("${dados.nome}", "${dados.nickname}", "${dados.password}")`)
    .then((result) => {
      console.log("USUARIO INSERIDO COM SUCESSO"),
        resposta({ message: "Usuario inserido com sucesso!" });
    })
    .catch((erro) => {
      console.log("ERRO AO INSERIR USUARIO"),
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