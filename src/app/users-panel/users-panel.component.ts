import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { IUserViewModel } from '../ClientViewModels/IUserVIewModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.css']
})

export class UsersPanelComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ["userId", "userName", "email", "actions"];
  users: IUserViewModel[]; 
  usersCount: number;
  dataSource: MatTableDataSource<IUserViewModel>;
  activePageDataChunk:Array<IUserViewModel> = [];
  pageSize:number = 5;
  userFilterForm: FormGroup;

 
  constructor(private userService: UsersService, private fb: FormBuilder, public snackBar:MatSnackBar) {
  }

  ngOnInit() {

    this.userFilterForm = this.fb.group({
      UserName: ['', [

      ]],
      Email: ['', [
      ]]
    });
    this.userService.getUsers()
    .subscribe(data => {
      this.users = data;
      this.usersCount = data.length;
      this.activePageDataChunk = data.slice(0,this.pageSize);
      this.dataSource = new MatTableDataSource(this.activePageDataChunk);
      this.dataSource.paginator= this.paginator;
    });
  }

  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.users.slice(firstCut, secondCut);
    this.dataSource = new MatTableDataSource(this.activePageDataChunk);
  }


  applyFilter(event: Event) {
    this.dataSource = new MatTableDataSource(this.users);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  deleteUser(userId){
    this.userService.deleteUser(userId)
    .subscribe(data => {
      if(data['status']===1){
        this.openSnackBar(data["message"], 'Close', 'red-snackbar')
      }else{
        this.openSnackBar('User deleted successfully', 'Close', 'green-snackbar')
        var filteredList: IUserViewModel[] = this.users.filter(user => user.userId !== userId);
        this.users = filteredList;
        this.usersCount = this.users.length;
    
        this.dataSource = new MatTableDataSource(this.users.slice(0,this.pageSize));
      }
    });



  }
  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: [className]
    });
  }

  applyFilters() {
    var filterObj = {};
    if (this.userFilterForm.controls["UserName"].value) {
      filterObj["UserName"] = this.userFilterForm.controls["UserName"].value;

    }
    if (this.userFilterForm.controls["Email"].value) {
      filterObj["Email"] = this.userFilterForm.controls["Email"].value
    }

    this.userService.getUsersFilter(filterObj)
      .subscribe(data => {
        this.users = data;
        this.usersCount = data.length;
        this.activePageDataChunk = data.slice(0, this.pageSize);
        this.dataSource = new MatTableDataSource(this.activePageDataChunk);
        
        this.paginator.firstPage();
      });

  }
}
