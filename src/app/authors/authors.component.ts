import { Component, OnInit } from '@angular/core';
import { IAuthorViewModel } from '../ClientViewModels/IAuthorViewModel';
import { MatTableDataSource } from '@angular/material/table';
import { AuthorService } from '../services/author.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  displayedColumns = ["authorId", "firstName", "lastName", "actions"];
  authors: IAuthorViewModel[];
  authorsCount: number;
  dataSource: MatTableDataSource<IAuthorViewModel>;
  activePageDataChunk:Array<IAuthorViewModel> = [];
  pageSize:number = 5;

  constructor(private authorService:AuthorService, public snackBar: MatSnackBar) { }


  ngOnInit() {
    this.authorService.getAuthors()
    .subscribe(data => {
      this.authors = data;
      this.authorsCount = data.length;
      this.activePageDataChunk = data.slice(0,this.pageSize);
      this.dataSource = new MatTableDataSource(this.activePageDataChunk);

    });
  }
  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.authors.slice(firstCut, secondCut);
    this.dataSource = new MatTableDataSource(this.activePageDataChunk);
  }
  applyFilter(event: Event) {
    this.dataSource = new MatTableDataSource(this.authors);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  deleteAuthor(authorId){
    this.authorService.deleteAuthor(authorId.toString())
    .subscribe(data => {
      if(data['status']===1){
        this.openSnackBar(data["message"], 'Close', 'red-snackbar')
      }else{
        this.openSnackBar('Author deleted successfully', 'Close', 'green-snackbar')
 
        var filteredList: IAuthorViewModel[] = this.authors.filter(a => a.authorId !== authorId);
        this.authors = filteredList;
        this.authorsCount = this.authors.length;
    
        this.dataSource = new MatTableDataSource(this.authors.slice(0,this.pageSize));
      }
    });


  }

   
  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: [className]
    });
  }

}
