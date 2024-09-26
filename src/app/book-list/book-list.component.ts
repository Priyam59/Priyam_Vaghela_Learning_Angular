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
  book1 : Books = {id : 1, title : "Howl's Moving Castle", author : "Diana Wynne Jones", genre : "romance", available : true};
  book2 : Books = {id : 2, title : "No Longer Human", author : "Dazai Osamu", genre : "fiction", available : false};
  book3 : Books = {id : 3, title : "Crime and Punishment", author : "Fyodor Dostoevsky", genre : "crime fiction", available : true};
  book4 : Books = {id : 4, title : "The Setting Sun", author : "Dazai Osamu", genre : "fiction", available : true};

  bookList : Books[] = [this.book1,this.book2,this.book3,this.book4]
}
