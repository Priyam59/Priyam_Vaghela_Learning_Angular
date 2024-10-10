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
  addStudent(newBook:Books) : Observable<Books[]>{
    this.books.push(newBook)
    return of(this.books);
  }

  //Update an Existing user
  updateStudent(updatedStudent: Books): Observable<Books[]> {
    const index = this.books.findIndex(user => user.id === updatedStudent.id);
    if (index !== -1) {
      this.books[index] = updatedStudent;
    }
    return of(this.books);
  }
  //Delete: Remove a user by ID
  deleteStudent(studentId: number): Observable<Books[]> {
    this.books = this.books.filter(user => user.id !== studentId);
    return of(this.books);
  }
  getStudentById(studentId: number): Observable<Books | undefined> {
    const student = this.books.find(user => user.id === studentId);
    return of(student);
  }
}
