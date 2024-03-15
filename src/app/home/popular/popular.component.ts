import { Component, OnInit, inject } from '@angular/core';
import { CourseService } from '../../Services/course.service';
import { Course } from '../../Models/Courses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent implements OnInit {

  courseService=inject(CourseService)
  popularCourses:Course[]=[];
  router:Router=inject(Router);

  ngOnInit(){
    this.popularCourses=this.courseService.courses.filter(c=>c.rating>=4.5)
  }

  navigateToCourses(){
      //  this.router.navigate(['Courses']);
      this.router.navigateByUrl('Courses' );
  }
}
