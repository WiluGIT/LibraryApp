import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from '../register/register.component';
import { AuthorService } from '../services/author.service';
import { IAuthorViewModel } from '../ClientViewModels/IAuthorViewModel';
import { IBookViewModel } from '../ClientViewModels/IBookViewModel';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  authorList: IAuthorViewModel[];
  constructor(private fb: FormBuilder, private authorService:AuthorService, private bookService:BookService) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: ['',[
        Validators.required       
      ]],
      releaseDate: [new Date(),[
        Validators.required
      ]],
      totalCount: ['',[
        Validators.required
      ]],
      authors: ['',[
        Validators.required
      ]]
    });

    this.authorService.getAuthors()
    .subscribe(data => this.authorList = data);
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

  addBook(){
    const book: IBookViewModel ={
      bookId: 0,
      title: this.bookForm.controls["title"].value,
      releaseDate: this.bookForm.controls["releaseDate"].value,
      totalCount: parseInt(this.bookForm.controls["totalCount"].value)
    };

    this.bookService.createBook(book).subscribe(data => {
      this.bookForm.controls["authors"].value.map(el => {
        this.bookService.addAuthorToBook(el,data["id"])
        .subscribe(data=>console.log(data))
      });
    });

    

  }

}
