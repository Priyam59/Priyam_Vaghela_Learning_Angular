import {Component, Input, OnInit} from '@angular/core';
import {Books} from "../models/books";
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-book-list-item',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './book-list-item.component.html',
  styleUrl: './book-list-item.component.scss'
})
export class BookListItemComponent implements OnInit{
  book: Books | undefined;
  bookList: Books[] = [];
  currentIndex: number = 0;

  constructor(
      private route: ActivatedRoute,
      private bookService: BookService,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.bookService.getbooks().subscribe(books => {
      this.bookList = books;


      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.bookList.findIndex(books => books.id === id);
          this.book = this.bookList[this.currentIndex];
        }
      });
    });
  }

  goBack(): void {
    this.router.navigate(['/books']);
  }

  goForward(): void {
    if (this.currentIndex < this.bookList.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/books', this.bookList[this.currentIndex].id]);
    }
  }

  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/books', this.bookList[this.currentIndex].id]);
    }
  }
}
