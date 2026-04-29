import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  course: string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'Rahul Sharma', course: 'Computer Engineering' },
    { id: 2, name: 'Anjali Patil', course: 'Information Technology' },
    { id: 3, name: 'Amit Verma', course: 'Data Science' }
  ];

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students.find(s => s.id === id);
  }
}