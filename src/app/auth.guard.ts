import { inject } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { Router,RouterStateSnapshot } from "@angular/router";
import { IDeActivateComponent } from "./Services/authguard.service";
import { CourseService } from "./Services/course.service";

// 1- CanActivateFn Route guard
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

// 2-CanActivateChildFn route guard
// here we simply create a function and assign that function in the canActivateChild property
export const CanActivateChildFn=()=>{
    // same logic as canActivateFn function , so we call that function in this function
   return canActivateFn();
}

//3-canDeactivate route guard
export const canDeactivate=(component:IDeActivateComponent, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot)=>{
  // when we return true then we can navigate from the contact page 
  // return true;
   // when we return false then we can not navigate from the contact page 
  // return false;
   return component.canExit();
}

//4-Resolve route guard
export const resolve=()=>{
  const courseService=inject(CourseService);
  return courseService.getAllCourses();
}