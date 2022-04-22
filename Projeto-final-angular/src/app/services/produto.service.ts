import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  criarProduto(nomeP, preco, img, qtd, fornecedor_id) {
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
    ).then(function (result) {
      return result.json();
    }).then(function (dados) {
      console.log(dados);
    }).catch(function (erro) {
      console.log(erro);
    })
  }

  buscarProdutos() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/buscar_produto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado)
    });
  }

  removerProduto(id) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/remover_produto', {
        method: 'POST',
        body: JSON.stringify(
          { id }
        ),
        headers: { 'Content-Type': 'application/json' }
      }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado)
    });
  }

  removerProdutoCarrinho(id) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/remover_produto_carrinho', {
        method: 'POST',
        body: JSON.stringify(
          { id }
        ),
        headers: { 'Content-Type': 'application/json' }
      }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado)
    });
  }

  selecionarProduto(id) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/selecionar_produto', {
        method: 'POST',
        body: JSON.stringify(
          { id }
        ),
        headers: { 'Content-Type': 'application/json' }
      }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado)
    });
  }

  comprar(QUANTIDADE, ID_PESSOA, ID_PRODUTO) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/comprar_produto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          { QUANTIDADE, ID_PESSOA, ID_PRODUTO }
        )
      }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    })
  }

}
