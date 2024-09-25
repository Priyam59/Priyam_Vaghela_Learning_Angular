import {Component, Input} from '@angular/core';
import {Books} from "../models/books";

@Component({
  selector: 'app-book-list-item',
  standalone: true,
  imports: [],
  templateUrl: './book-list-item.component.html',
  styleUrl: './book-list-item.component.css'
})
export class BookListItemComponent {
  @Input() book ?: Books;
}
