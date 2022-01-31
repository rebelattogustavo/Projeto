import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router"
import { Observable } from "rxjs";

@Injectable()
class CheckLogged implements CanActivate{
    constructor(private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): Observable<boolean> | Promise<boolean> | boolean {
        console.log('DENTRO')

        let user = localStorage.getItem('listaUsuarios')
        
        if(user){
            return true;
        } else{
            this.router.navigate(['/']);
            return false;
        }
    }
}

export default CheckLogged