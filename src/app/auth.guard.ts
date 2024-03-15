import { inject } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { Router } from "@angular/router";

export const canActivateFn=()=>{

    const authService=inject(AuthService);
    const router=inject(Router)

    if(authService.IsAunthicated()){
        return true;
      }else{
        router.navigate(['/Login']);
        return false;
      }
}

// here we simply create a function and assign that function in the canActivateChild property
export const CanActivateChildFn=()=>{
    // same logic as canActivateFn function , so we call that function in this function
   return canActivateFn();
}