import { Component } from '@angular/core';
import { AddBook } from './components/add-book/add-book';
import { BookList } from './components/book-list/book-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddBook, BookList],
  template: `
    <div class="container mt-5">
      <h1 class="text-center mb-4">Library Management</h1>
      <app-add-book></app-add-book>
      <app-book-list></app-book-list>
    </div>
  `
})
export class AppComponent {}