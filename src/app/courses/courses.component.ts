import { Component,OnInit,inject } from '@angular/core';
import { Course } from '../Models/Courses';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {

  coursesService=inject(CourseService)
  AllCourses:Course[];

  searchString:string;
  activeRoute:ActivatedRoute=inject(ActivatedRoute);

  ngOnInit(){
    // this.searchString=this.activeRoute.snapshot.queryParams['search'];
    // When we use queryParamMap that time we use get method and pass query string
    // using queryParams and queryParamMap we can read the quey string value

    // this.searchString=this.activeRoute.snapshot.queryParamMap.get('search');
    // console.log(this.searchString);

    this.activeRoute.queryParamMap.subscribe((data)=>{
        this.searchString=data.get('search');

         if(this.searchString===undefined || this.searchString==='' ||  this.searchString===null){
        //  this.coursesService.getAllCourses().subscribe((data:Course[])=>{
        //   this.AllCourses=data;
        //  });
        this.AllCourses= this.activeRoute.snapshot.data ['courses'];
        }
        else
        {
          this.AllCourses=this.coursesService.courses.
          filter(x=>x.title.toLowerCase().
          includes(this.searchString.toLowerCase()));
        }
    })
 }
}
