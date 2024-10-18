import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {booklist} from "../models/mock-book.ts";
import {Books} from "../models/books";

@Injectable({
  providedIn: 'root'
})
export class BookService {
private books : Books[] = booklist;
  constructor() { }

  getbooks() : Observable<Books[]>{
    return of(booklist);
  }
  addBook(newBook:Books) : Observable<Books[]>{
    this.books.push(newBook)
    return of(this.books);
  }

  //Update an Existing user
  updateBook(updatedBook: Books): Observable<Books[]> {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
    return of(this.books);
  }
  //Delete: Remove a user by ID
  deleteBook(bookId: number): Observable<Books[]> {
    this.books = this.books.filter(book => book.id !== bookId);
    return of(this.books);
  }
  getBookById(bookId: number): Observable<Books | undefined> {
    const book = this.books.find(book => book.id === bookId);
    return of(book);
  }
}
