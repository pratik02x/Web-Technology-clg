import { Component } from '@angular/core';
import { StudentService } from '../Services/student-service';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students: any[]=[]; //any[]-> it means it can store any type of data

  /**
   *
   */
  constructor(private studentService:StudentService) {}

  ngOnInit(){
    this.students=this.studentService.getStudents();
  }
}
