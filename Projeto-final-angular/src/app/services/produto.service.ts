import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  criarProduto(nome, preco){
    fetch('/api/criar_produto',
    {
        method: 'POST',
        body: JSON.stringify(
            {
                nome, preco
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

}
