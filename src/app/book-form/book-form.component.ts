import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from '../register/register.component';
import { AuthorService } from '../services/author.service';
import { IAuthorViewModel } from '../ClientViewModels/IAuthorViewModel';
import { IBookViewModel } from '../ClientViewModels/IBookViewModel';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IBookAuthorViewModel } from '../ClientViewModels/IBookAuthorViewModel';
import { ThrowStmt } from '@angular/compiler';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  bookId: number;
  book: IBookAuthorViewModel;
  authorList: IAuthorViewModel[];
  actionText:string = "Create";
  constructor(private fb: FormBuilder, 
    private authorService: AuthorService, 
    private bookService: BookService, 
    private route: ActivatedRoute, 
    private router: Router,
    public snackBar: MatSnackBar) {
    route.params.subscribe(p => {
      //+before p converts id to a number
      this.bookId = +p['id'] || null;

    });
  }
  
  ngOnInit() {
    this.bookForm = this.fb.group({
      title: ['', [
        Validators.required
      ]],
      releaseDate: ['', [
        Validators.required
      ]],
      totalCount: ['', [
        Validators.required,


      ]],
      authors: ['', [
        Validators.required
      ]]
    });

    this.authorService.getAuthors()
      .subscribe(data => this.authorList = data);

    if (this.bookId) {
      this.actionText = "Update"
      this.bookService.getBook(this.bookId)
        .subscribe(data => {
          this.book = {
            book: {
              bookId: null,
              title: '',
              releaseDate: null,
              totalCount: null
            },
            authors: []
          };
          this.book = data;

          // populate form
          this.bookForm.controls.title.setValue(this.book.book.title);
          this.bookForm.controls.releaseDate.setValue(this.book.book.releaseDate);
          this.bookForm.controls.totalCount.setValue(this.book.book.totalCount);


          // populate dropdown
          const selectedAuthors = this.book.authors.map(aut => aut.firstName);
          this.bookForm.controls.authors.setValue(selectedAuthors);


  


        });
    }
  }

  get title() {
    return this.bookForm.get('title');
  }
  get releaseDate() {
    return this.bookForm.get('releaseDate');
  }

  get totalCount() {
    return this.bookForm.get('totalCount');
  }

  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: [className]
    });
  }

  addBook() {
    // convert categories, vods dropdownlist value to proper object and set to form value
    const authList = this.bookForm.controls.authors.value.map(el => {
      return this.authorList.find(x => x.firstName === el)
    });
    this.bookForm.controls.authors.setValue(authList);

    const book: IBookViewModel = {
      bookId: 0,
      title: this.bookForm.controls["title"].value,
      releaseDate: this.bookForm.controls["releaseDate"].value,
      totalCount: parseInt(this.bookForm.controls["totalCount"].value)
    };

    if (this.bookId) {
      // delete authors from book
      this.book.authors.map(el => {

        this.bookService.deleteAuthorFromBook(el.authorId, this.bookId)
          .subscribe(data => {});
  
      });
      // update book and authors
      book.bookId = this.bookId;
      this.bookService.updateBook(book)
        .subscribe(data => {
          authList.map(el => {
            this.bookService.addAuthorToBook(el.authorId, data["id"])
            .subscribe(data => this.book.authors = authList)
          });
          if(data['status']===1){
            this.openSnackBar(data["message"], 'Close', 'red-snackbar')
          }else{
            this.openSnackBar('Book updated', 'Close', 'green-snackbar')
          }

        });
    }
    else {
      // add book
      this.bookService.createBook(book).subscribe(data => {
        authList.map(el => {
          this.bookService.addAuthorToBook(el.authorId, data["id"])
            .subscribe(data => {
              if(data['status']===1){
                this.openSnackBar(data["message"], 'Close', 'red-snackbar')
              }else{
                this.openSnackBar('Book created', 'Close', 'green-snackbar')
              }
            })
        });
      });
    }


    // populate dropdown lists back 
    const selectedAuthors = authList.map(auth => auth.firstName);
    this.bookForm.controls.authors.setValue(selectedAuthors);

    // populate book authors again
    this.book.authors = authList;

  }

}
