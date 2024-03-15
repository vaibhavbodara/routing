import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLogged: boolean = false;

  // here we create an instance of userService class
  userService: UserService = inject(UserService);

  islogin(username: string, password: string) {
    let user = this.userService.users.find((u) => u.username === username && u.password === password);

    if(user===undefined){
      this.isLogged=false;
    }
    else{
      this.isLogged=true;
    }
    return user;
  }

  logout(){
    this.isLogged=false;
  }
  
  IsAunthicated(){
    return this.isLogged;
  }
  
}
