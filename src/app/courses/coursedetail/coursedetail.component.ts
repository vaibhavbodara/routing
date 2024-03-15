import { Component,inject ,OnInit,OnDestroy} from '@angular/core';
import { Course } from '../../Models/Courses';
import { CourseService } from '../../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrl: './coursedetail.component.css'
})
export class CoursedetailComponent implements OnInit,OnDestroy {
  selectedCourse:Course;
  courseId:number;

  courseService:CourseService=inject(CourseService);
  activeRoute:ActivatedRoute=inject(ActivatedRoute);
   
  paramMapObs;
  ngOnInit(){
    //  this.courseId= +this.activeRoute.snapshot.paramMap.get('id');
    // //  console.log(this.courseId);
    // this.selectedCourse=this.courseService.courses.find(course=> course.id ===  this.courseId);

    this.paramMapObs=this.activeRoute.params.subscribe((data)=>{
      this.courseId=  +data['id'];  
      this.selectedCourse=this.courseService.courses.find(course=>course.id===this.courseId)
    })
  }

  ngOnDestroy(){
    this.paramMapObs.unsubscribe();
  }
}


