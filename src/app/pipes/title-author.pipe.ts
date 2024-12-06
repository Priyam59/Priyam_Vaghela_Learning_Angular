import { Pipe, PipeTransform } from '@angular/core';
import {Books} from "../models/books";

@Pipe({
  name: 'titleAuthor',
  standalone: true
})
export class TitleAuthorPipe implements PipeTransform {

  transform(book: Books): string {
    return `${book.title} ${book.author}`;
  }
}
