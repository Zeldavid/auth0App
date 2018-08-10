import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor( private auth: AuthService ) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    console.log(next);
    if ( this.auth.isAuthenticated()) {
      console.log('Paso el guard');
      return true;
    } else {
      console.log('bloqueado por el guard');
      return false;
    }
  }
}
