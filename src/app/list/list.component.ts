import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userList: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  getUserList() {
      this.dataService.getUsers().subscribe ( data => {
      this.userList = data;
      console.log(this.userList);
    })
  }

  delUserList() {
    this.userList = [];
  }
  
  getDetail(user: any){
    alert(JSON.stringify(user, null, 2));
  }

  delUser(user: any, index: number){
    this.userList.splice(index, 1);
  }

}