import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class Student {

  name = '';
  age = 0;
  course = '';

  students: any[] = [];

  addStudent() {
    this.students.push({
      name: this.name,
      age: this.age,
      course: this.course
    });

    this.name = '';
    this.age = 0;
    this.course = '';
  }

  deleteStudent(i: number) {
    this.students.splice(i, 1);
  }
}