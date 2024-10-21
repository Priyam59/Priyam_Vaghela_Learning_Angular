import { Component } from '@angular/core';
import {Books} from "../models/books";
import {BookListItemComponent} from "../book-list-item/book-list-item.component";
import {NgClass, NgFor} from "@angular/common";
import {BookService} from "../services/book.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    BookListItemComponent,
    NgFor,
    NgClass,
    RouterLink
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  displayedColumns:string[]= ['id', 'title', 'author', 'genre', 'availability'];
  bookList: Books[] = [];
  constructor (private bookService: BookService) {
  }
    ngOnInit()
    {

      this.bookService.getbooks().subscribe({
        next: (data: Books[]) => this.bookList = data,
        error: err => console.error("Error fetching Books", err),
        complete: () => console.log("Book data fetch complete!")
      })
    }
  selectedBook?: Books;
  selectBook(books: Books): void {
    this.selectedBook = books;
  }
  }

