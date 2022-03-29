import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor() { }


  buscarManager(){
    return new Promise((resolvido, rejeitado) =>{

      fetch('/api/buscar_manager', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      }).then(resultado => resultado.json())
      .then(result => resolvido(result))
      .catch(rejeitado)
    });
  }

}
