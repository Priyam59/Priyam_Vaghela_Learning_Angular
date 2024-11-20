import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../services/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Books} from "../models/books";

@Component({
  selector: 'app-modify-book',
  standalone: true,
  imports: [],
  templateUrl: './modify-book.component.html',
  styleUrl: './modify-book.component.css'
})
export class ModifyBookComponent implements OnInit{
  bookForm: FormGroup;
  book: Books | undefined;
  error: string | null = null;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      id: [bookService.generateNewId()],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      department: [''],
      isAdmin: [false]
    });
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.bookService.getBookById(id).subscribe( {
        next: book => {
          if (book) {
            this.bookForm.patchValue(book);
          }
        },
        error: err => {
          this.error = 'Error fetching book';
          console.error('Error fetching book:', err);
        }
      });
    }
  }
  onSubmit(): void {
    if (this.bookForm.valid) {
      const book: Books = this.bookForm.value;
      if (book.id) {
        this.bookService.updateBook(book).subscribe(() => this.router.navigate(['/books']));
      } else {
        book.id = this.bookService.generateNewId();
        this.bookService.addBook(book).subscribe(() => this.router.navigate(['/books']));
      }
    }
  }
  onDelete(): void {
    const id = this.bookForm.value.id;
    if (id) {
      this.bookService.deleteBook(id).subscribe(() => this.router.navigate(['/books']));
    }
  }
  navigateToBookList(): void {
    this.router.navigate(['/books']);
  }
}
