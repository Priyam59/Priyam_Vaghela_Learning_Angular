import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../services/book.service";
import {Books} from "../models/books";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-modify-book',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
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
      id: [bookService.generateNewId()], //ID is NOT required
      title: ['', Validators.required],//Title is required
      author: ['', Validators.required],
      genre: [''],
      available: [false]
    });
  }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.bookService.getBookById(id).subscribe( {
        next: student => {
          if (student) {
            this.bookForm.patchValue(student);
          }
        },
        error: err => {
          this.error = 'Error fetching student';
          console.error('Error fetching student:', err);
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

  navigateToStudentList(): void {
    this.router.navigate(['/books']);
  }
}
