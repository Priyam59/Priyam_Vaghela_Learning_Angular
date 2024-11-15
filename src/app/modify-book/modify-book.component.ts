import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Books} from "../models/books";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../services/book.service";

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
      //Auto filling the ID field with a new ID
      id: [bookService.generateNewId()], //ID is NOT required
      firstName: ['', Validators.required],//First name is required
      lastName: ['', Validators.required],
      department: [''],
      isAdmin: [false]
    });
  }
  /*
  This code initializes the component by fetching the details of a specific book based on the ID provided
   in the route parameters. It then populates the reactive form with the book's data, allowing the Books
    to view or modify the book's details.
   */
  ngOnInit(): void {
    // first we retreive the book ID from the route parameters using the ActivatedRoute service
    //the paramMap.get('id') method extracts the 'id' parameter from the route, and Number()
    // converts it to a numeric value. This ID is then used to fetch the book's details.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      //if the ID is valid, the bookService is used to fetch the book's details by calling the getbookById method
      this.bookService.getBookById(id).subscribe( {
        next: book => {
          if (book) {
            //If the book object is valid, the patchValue method of the reactive form
            // (bookForm) is called to populate the form with the book's data The patchValue method updates the form controls with the
            // values from the book object without resetting the entire form
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
  /*
  onSubmit method in the ModifybookComponent class is responsible for handling
   the form submission when the Books attempts to save the books details.
    This method first checks if the form is valid by using the valid property of the reactive form
   */
  onSubmit(): void {
    if (this.bookForm.valid) {
      //Iff the form is valid, it extracts the form values into a book object of type Books
      const book: Books = this.bookForm.value;
      /*
      Here we have a little bit of logic, first iff the book.id
      and just being updated

      if it does not exist, we know that the book is new and we need to add it to the list
       */
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
