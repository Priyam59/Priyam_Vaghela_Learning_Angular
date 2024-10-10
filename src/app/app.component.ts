import {Component, Injectable} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Books} from "./models/books";
import {NgFor, NgIf} from "@angular/common";
import {BookListComponent} from "./book-list/book-list.component";
import {booklist} from "./models/mock-book.ts";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

@Injectable({
  providedIn: 'root'
})

export class AppComponent {
  title = 'Book Management System'
}



