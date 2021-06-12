import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';
import { User } from 'src/app/user/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  listUsers: User[] = [];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    }, error => {
      console.log(error)
    })
  }

  deleteUser(id: any) {
    this._userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    }, error => {
      console.log(error)
    })
  }
}
