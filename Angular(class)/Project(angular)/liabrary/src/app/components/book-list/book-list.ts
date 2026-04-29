import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryService } from '../../services/library';
import { Book } from '../../model/model';
// import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.html'
})
export class BookList implements OnInit {
  books: Book[] = [];

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.books = this.libraryService.getBooks();
  }

  removeBook(id: number) {
    this.libraryService.deleteBook(id);
  }
}