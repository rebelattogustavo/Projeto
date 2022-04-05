import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  criarProduto(nomeP, preco, img, qtd, fornecedor_id){
    fetch('/api/criar_produto',
    {
        method: 'POST',
        body: JSON.stringify(
            {
                nomeP, preco, img, qtd, fornecedor_id
            }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    }
).then(function (result){
    return result.json();
}).then(function (dados){
    console.log(dados);
}).catch(function(erro){
  console.log(erro);
})
  }

  buscarProdutos(){
    return new Promise((resolvido, rejeitado) =>{

      fetch('/api/buscar_produto', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      }).then(resultado => resultado.json())
      .then(result => resolvido(result))
      .catch(rejeitado)
    });
  }

  removerProduto(id){
    return new Promise((resolvido, rejeitado) =>{

      fetch('/api/remover_produto', {
        method: 'POST',
        body: JSON.stringify(
          {  id  }
        ),
        headers: {'Content-Type': 'application/json'}
      }).then(resultado => resultado.json())
      .then(result => resolvido(result))
      .catch(rejeitado)
    });
  }

}
