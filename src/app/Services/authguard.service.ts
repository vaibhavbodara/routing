import { Injectable ,inject} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate ,CanActivateChild{

  //add instance of AuthService
  authService:AuthService=inject(AuthService);
  //here we inject router class instance so we navigate different views
  router:Router=inject(Router);

  // this same we do in the auth.guard.ts file
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean > 
  {
    // if here we write false then canActivate route guard protect the Checkout route
    // return false;

    // not use of hard coded value here we write some dynamically using of if else condition
    if(this.authService.IsAunthicated()){
      return true;
    }else{
      this.router.navigate(['/Login']);
      return false;
    }
  }
  
  // this same we do in the auth.guard.ts file
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute,state);
  }
  constructor() { }
}
