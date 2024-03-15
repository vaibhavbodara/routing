import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  // For achieving the access of activated route
  activeRoute: ActivatedRoute = inject(ActivatedRoute)

  JumpToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
  }
  
  // ngOnInit is for the read the value of the fragment
  ngOnInit() {

    // here fragment work as a Observable, so we subscribe the fragment
    this.activeRoute.fragment.subscribe((data) => {
      // console.log(data);

      // here we call the JumpToSection method for achieving the fragment section in the webPage
      this.JumpToSection(data);

    })
  }
}
