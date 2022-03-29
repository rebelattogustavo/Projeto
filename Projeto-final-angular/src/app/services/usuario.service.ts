import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  buscarUsuario(){
    return new Promise((resolvido, rejeitado) =>{

      fetch('/api/buscar_usuario', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      }).then(resultado => resultado.json())
      .then(result => resolvido(result))
      .catch(rejeitado)
    });
  }

  criarUsuario(nome, password){
    fetch('/api/criar_usuario',
    {
        method: 'POST',
        body: JSON.stringify(
            {
                nome, password
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
