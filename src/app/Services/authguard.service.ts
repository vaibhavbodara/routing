import { Injectable ,inject} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ContactComponent } from '../contact/contact.component';
import { Course } from '../Models/Courses';
import { CourseService } from './course.service';

export interface IDeActivateComponent{
  canExit: ()=> boolean|Observable<boolean>|Promise<boolean>;
}

@Injectable({
  providedIn: 'root'
})
                            
export class AuthGuardService implements CanActivate ,CanActivateChild,CanDeactivate<IDeActivateComponent>,Resolve<Course[]>{

  //add instance of AuthService
  authService:AuthService=inject(AuthService);
  //here we inject router class instance so we navigate different views
  router:Router=inject(Router);
  //add instance of courseService
  courseService:CourseService=inject(CourseService);

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

  canDeactivate(component: IDeActivateComponent, currentRoute: ActivatedRouteSnapshot, 
                currentState: RouterStateSnapshot, nextState: RouterStateSnapshot){
      // when we return true then we can navigate from the contact page 
      // return true;
       // when we return false then we can not navigate from the contact page 
      // return false;

      return component.canExit();
  }

  // this route guard show the data when some data emit before the route is navigate(when data is available)
 resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course[] | Observable<Course[]> | Promise<Course[]> {
     return this.courseService.getAllCourses();
 }
}
