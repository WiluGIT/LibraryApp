import { Component, OnInit } from '@angular/core';
import { IBookViewModel } from '../ClientViewModels/IBookViewModel';
import { MatTableDataSource } from '@angular/material/table';
import { BookService } from '../services/book.service';
import { IBookAuthorViewModel } from '../ClientViewModels/IBookAuthorViewModel';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  constructor(private bookService: BookService, private fb: FormBuilder) { }

  ngOnInit() {
    this.bookFilterForm = this.fb.group({
      Title: ['', [

      ]],
      ReleaseDate: ['', [
      ]],
      ReleaseDateFrom: ['', [

      ]],
      ReleaseDateTo: ['', [
      ]]
    });
    this.bookService.getBooks()
      .subscribe(data => {
        this.books = data;
        this.bookCount = data.length;
        this.activePageDataChunk = data.slice(0, this.pageSize);
        this.dataSource = new MatTableDataSource(this.activePageDataChunk);

      });
  }
  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.books.slice(firstCut, secondCut);
    this.dataSource = new MatTableDataSource(this.activePageDataChunk);
  }
  applyFilter(event: Event) {
    this.dataSource = new MatTableDataSource(this.books);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

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
    if (this.bookFilterForm.controls["Title"].value){
      filterObj["Title"] = this.bookFilterForm.controls["Title"].value;

    }
    if (this.bookFilterForm.controls["ReleaseDate"].value){
      var dateStrToSendToServer = new Date(this.bookFilterForm.controls["ReleaseDate"].value)
      filterObj["ReleaseDate"] = dateStrToSendToServer.toISOString();
    }

      
    if (this.bookFilterForm.controls["ReleaseDateFrom"].value){
      var dateStrToSendToServer = new Date(this.bookFilterForm.controls["ReleaseDateFrom"].value)
      filterObj["ReleaseDateFrom"] = dateStrToSendToServer.toISOString();

    }
    if (this.bookFilterForm.controls["ReleaseDateTo"].value){
      var dateStrToSendToServer = new Date(this.bookFilterForm.controls["ReleaseDateTo"].value)
      filterObj["ReleaseDateTo"] = dateStrToSendToServer.toISOString();

    }

    this.bookService.getBookFilter(filterObj)
      .subscribe(data => {
        this.books = data;
        this.bookCount = data.length;
        this.activePageDataChunk = data.slice(0, this.pageSize);
        this.dataSource = new MatTableDataSource(this.activePageDataChunk);
      });

  }

}
