import { Component, OnInit } from '@angular/core';
import { IBookViewModel } from '../ClientViewModels/IBookViewModel';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IBookAuthorViewModel } from '../ClientViewModels/IBookAuthorViewModel';

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css']
})
export class BorrowedBooksComponent implements OnInit {

  borrowedBooks: IBookAuthorViewModel[];
  userId:string;
  constructor(private bookService: BookService, private route:ActivatedRoute, private router :Router) { 
    route.params.subscribe(p => {
      //+before p converts id to a number
      this.userId = p['id'] || null;

    });
  }

  ngOnInit() {
    this.borrowedBooks=[];
    this.bookService.getBorrowedBooks(this.userId)
    .subscribe(data => {
      this.borrowedBooks=data;
    });
  }

  returnBook(bookId:number){
    const userId = localStorage.getItem("id");
    this.bookService.returnBook(userId, bookId)
    .subscribe(data => {
      var filteredList: IBookAuthorViewModel[] = this.borrowedBooks.filter(book => book.book.bookId !== bookId);
      this.borrowedBooks = filteredList;
    });


  }

}
