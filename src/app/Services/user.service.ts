import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users:User[]=[
    new User(1,'John Smith','js','12345'),
    new User(2,'David backman','db','12345'),
    new User(3,'AquaMan','am','12345'),
    new User(4,'Sarah King','sk','12345'),
    new User(5,'Mark Vought','mv','12345')

  ]
}
