import { Component, OnInit } from '@angular/core';
import { IBookViewModel } from '../ClientViewModels/IBookViewModel';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IBookAuthorViewModel } from '../ClientViewModels/IBookAuthorViewModel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'protractor';

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css']
})
export class BorrowedBooksComponent implements OnInit {

  borrowedBooks: IBookAuthorViewModel[];
  userId: string;
  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router, public snackBar:MatSnackBar) {
    route.params.subscribe(p => {
      //+before p converts id to a number
      this.userId = p['id'] || null;

    });
  }

  ngOnInit() {
    this.borrowedBooks = [];
    this.bookService.getBorrowedBooks(this.userId)
      .subscribe(data => {
        this.borrowedBooks = data;
      });
  }

  returnBook(bookId: number) {
    const userId = localStorage.getItem("id");
    this.bookService.returnBook(userId, bookId)
      .subscribe(data => {
        var filteredList: IBookAuthorViewModel[] = this.borrowedBooks.filter(book => book.book.bookId !== bookId);
        this.borrowedBooks = filteredList;

        this.openSnackBar("Book returned", 'Close', 'green-snackbar')
      },error =>{
        this.openSnackBar("Error", 'Close', 'red-snackbar')
      });


  }
  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: [className]
    });
  }

  


}
