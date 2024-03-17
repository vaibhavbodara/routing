import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoursedetailComponent } from './courses/coursedetail/coursedetail.component';
import { PopularComponent } from './home/popular/popular.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CanActivateChildFn, canActivateFn, resolve } from './auth.guard';
import { AuthGuardService } from './Services/authguard.service';
// import { AuthGuardService } from './Services/authguard.service';

const routes: Routes = [
  {path:'',component:HomeComponent},
  // {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent,canDeactivate:[(comp:ContactComponent)=>{return comp.canExit();}]},
  {path:'Courses',component:CoursesComponent,resolve:{courses:resolve}},
  // {path:'Courses/Course/:id',component:CoursedetailComponent},

  // this is for Child Route of Courses
  // canActivateChild property protect all the child routes but note protect the parent(Courses) route
  {path:'Courses', canActivateChild:[CanActivateChildFn],children:[
       {path:'Course/:id',component:CoursedetailComponent},
       {path:'Popular',component:PopularComponent},
       {path:'Checkout',component: CheckoutComponent},
    
  ]}, 
  {path:'Login',component:LoginComponent},

  //here '**' match the all the path and no one path is that time notFoundComponent is render
  //this route is called Wild Card Route
  {path:'**',component:NotFoundComponent},
   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }



