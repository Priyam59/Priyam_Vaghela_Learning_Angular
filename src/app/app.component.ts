import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Books} from "./models/books";
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  book1 : Books = {id : 1, title : "Howl's Moving Castle", author : "Diana Wynne Jones", genre : "romance", available : true};
  book2 : Books = {id : 2, title : "No Longer Human", author : "Dazai Osamu", genre : "fiction", available : false};
  book3 : Books = {id : 3, title : "Crime and Punishment", author : "Fyodor Dostoevsky", genre : "crime fiction", available : true};
  book4 : Books = {id : 4, title : "The Setting Sun", author : "Dazai Osamu", genre : "fiction", available : true};
  book5 : Books = {id : 5, title : "The Song Of Achilles", author : "Glennie Kindred", genre : "War Story", available: false};
  book6 : Books = {id : 5, title : "It Ends with us", author : "Collen Hoover", genre : "Romance",available: true};

  bookList : Books[] = [this.book1,this.book2,this.book3,this.book4,this.book5,this.book6]
}



