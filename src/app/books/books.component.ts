import { Component, OnInit } from '@angular/core';
import { IBookViewModel } from '../ClientViewModels/IBookViewModel';
import { MatTableDataSource } from '@angular/material/table';
import { BookService } from '../services/book.service';
import { IBookAuthorViewModel } from '../ClientViewModels/IBookAuthorViewModel';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthorService } from '../services/author.service';
import { IAuthorViewModel } from '../ClientViewModels/IAuthorViewModel';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  displayedColumns = ["bookId", "title", "releaseDate", "totalCount", "authors", "actions"];
  books: IBookAuthorViewModel[];
  bookFilterForm: FormGroup;
  bookCount: number;
  dataSource: MatTableDataSource<IBookAuthorViewModel>;
  activePageDataChunk: Array<IBookAuthorViewModel> = [];
  pageSize: number = 5;
  authorList: IAuthorViewModel[];
  userId:string;
  isAdmin:boolean;
  constructor(private authService: AuthService, 
    private bookService: BookService, 
    private fb: FormBuilder, 
    private authorService: AuthorService,
    private router: Router) { }

  ngOnInit() {
    this.bookFilterForm = this.fb.group({
      Title: ['', [

      ]],
      ReleaseDate: ['', [
      ]],
      ReleaseDateFrom: ['', [

      ]],
      ReleaseDateTo: ['', [
      ]],
      authors: ['', [

      ]],
    });
    this.bookService.getBooks()
      .subscribe(data => {
        this.books = data;
        this.bookCount = data.length;
        this.activePageDataChunk = data.slice(0, this.pageSize);
        this.dataSource = new MatTableDataSource(this.activePageDataChunk);

      });

    this.authorService.getAuthors()
      .subscribe(data => this.authorList = data);

    this.authService.getUserInfo()
      .subscribe(data => {
        localStorage.setItem('id', data["sub"]);
        this.userId = data["sub"];
      });
    this.isAdmin = this.authService.isAdmin();

    
  }
  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.books.slice(firstCut, secondCut);
    this.dataSource = new MatTableDataSource(this.activePageDataChunk);
  }


  deleteBook(bookId) {
    console.log(bookId)
    this.bookService.deleteBook(bookId)
      .subscribe(data => {
        console.log(data);
      });

    var filteredList: IBookAuthorViewModel[] = this.books.filter(book => book.book.bookId !== bookId);
    this.books = filteredList;
    this.bookCount = this.books.length;

    this.dataSource = new MatTableDataSource(this.books.slice(0, this.pageSize));

  }

  applyFilters() {
    var filterObj = {};
    if (this.bookFilterForm.controls["Title"].value) {
      filterObj["Title"] = this.bookFilterForm.controls["Title"].value;

    }
    if (this.bookFilterForm.controls["ReleaseDate"].value) {
      var dateStrToSendToServer = new Date(this.bookFilterForm.controls["ReleaseDate"].value)
      filterObj["ReleaseDate"] = dateStrToSendToServer.toISOString();
    }


    if (this.bookFilterForm.controls["ReleaseDateFrom"].value) {
      var dateStrToSendToServer = new Date(this.bookFilterForm.controls["ReleaseDateFrom"].value)
      filterObj["ReleaseDateFrom"] = dateStrToSendToServer.toISOString();

    }
    if (this.bookFilterForm.controls["ReleaseDateTo"].value) {
      var dateStrToSendToServer = new Date(this.bookFilterForm.controls["ReleaseDateTo"].value)
      filterObj["ReleaseDateTo"] = dateStrToSendToServer.toISOString();

    }
    if (this.bookFilterForm.controls["authors"].value) {
      filterObj["authorIds"] = this.bookFilterForm.controls["authors"].value;

    }
    this.bookService.getBookFilter(filterObj)
      .subscribe(data => {
        this.books = data;
        this.bookCount = data.length;
        this.activePageDataChunk = data.slice(0, this.pageSize);
        this.dataSource = new MatTableDataSource(this.activePageDataChunk);
      });

  }

  borrowBook(bookId: number) {
    const userId = localStorage.getItem("id");
    this.bookService.borrowBook(userId, bookId)
    .subscribe(data=>console.log(data));

    this.router.navigate(['/my-books/'+userId]);
  }

}
