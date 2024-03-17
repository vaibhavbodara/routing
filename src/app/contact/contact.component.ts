import { Component } from '@angular/core';
import { IDeActivateComponent } from '../Services/authguard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements IDeActivateComponent  {
   firstName : string='';
   lastName: string='';
   country: string='usa';
   message:string='';

   isSubmitted:boolean=false;

   OnSubmit(){
    this.isSubmitted=true;
   }

   canExit(){
    if((this.firstName||this.lastName||this.message)&& !this.isSubmitted){
      return confirm('You have unsaved changes. Do you want to navigate away?')
    }
    else{
      return true;
    }
   }
}
