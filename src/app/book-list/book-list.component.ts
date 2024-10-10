import { Component } from '@angular/core';
import {Books} from "../models/books";
import {BookListItemComponent} from "../book-list-item/book-list-item.component";
import {NgClass, NgFor} from "@angular/common";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    BookListItemComponent,
    NgFor,
    NgClass
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

}
