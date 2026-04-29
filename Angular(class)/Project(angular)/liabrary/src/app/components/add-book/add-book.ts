import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibraryService } from '../../services/library';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.html'
})
export class AddBook {
  newBook = { title: '', author: '', category: '' };

  constructor(private libraryService: LibraryService) {}

  saveBook() {
    if (this.newBook.title && this.newBook.author) {
      this.libraryService.addBook(this.newBook);
      this.newBook = { title: '', author: '', category: '' }; // Reset form
    }
  }
}