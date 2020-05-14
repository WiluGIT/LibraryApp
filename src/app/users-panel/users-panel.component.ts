import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { IUserViewModel } from '../ClientViewModels/IUserVIewModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.css']
})
export class UsersPanelComponent implements OnInit {
  displayedColumns = ["userId", "userName", "email", "actions"];
  users: IUserViewModel[]; 
  usersCount: number;
  dataSource: MatTableDataSource<IUserViewModel>;
  activePageDataChunk:Array<IUserViewModel> = [];
  pageSize:number = 5;
 
  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(data => {
      this.users = data;
      this.usersCount = data.length;
      this.activePageDataChunk = data.slice(0,this.pageSize);
      this.dataSource = new MatTableDataSource(this.activePageDataChunk);
      this.dataSource.filterPredicate = function(data, filter: string): boolean {
        return data.userName.toLowerCase().includes(filter);
      };
      console.log(this.activePageDataChunk)
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
    .subscribe(data => console.log(data));

    var filteredList: IUserViewModel[] = this.users.filter(user => user.userId !== userId);
    this.users = filteredList;
    this.usersCount = this.users.length;

    this.dataSource = new MatTableDataSource(this.users.slice(0,this.pageSize));

  }

  essa(){
    console.log(this.usersCount)
  }
}
