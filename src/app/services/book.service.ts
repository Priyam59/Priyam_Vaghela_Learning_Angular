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


}
