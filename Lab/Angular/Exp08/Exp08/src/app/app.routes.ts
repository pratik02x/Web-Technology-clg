import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list';
import { StudentDetailsComponent } from './components/student-details/student-details';


export const routes: Routes = [
  { path: 'students', component: StudentListComponent},
  { path: 'student/:id', component: StudentDetailsComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' }
];