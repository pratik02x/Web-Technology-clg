import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students=[
    {name:"pratik",age:20,course:"Web"},
    {name:"Ami",age:20,course:"Ml"}
  ]

    getStudents(){
       return this.students;
   }
}
