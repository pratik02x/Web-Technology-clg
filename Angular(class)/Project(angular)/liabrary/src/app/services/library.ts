import { Injectable } from '@angular/core';
import { Book } from '../model/model';
// import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private books: Book[] = [
    { id: 1, title: 'Deep Learning', author: 'Goodfellow', category: 'AI', status: 'Available' },
    { id: 2, title: 'Clean Code', author: 'Robert Martin', category: 'Programming', status: 'Available' }
  ];

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Partial<Book>) {
    const newBook: Book = {
      id: Date.now(),
      title: book.title || '',
      author: book.author || '',
      category: book.category || '',
      status: 'Available'
    };
    this.books.push(newBook);
  }

  deleteBook(id: number) {
    const index = this.books.findIndex(b => b.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}