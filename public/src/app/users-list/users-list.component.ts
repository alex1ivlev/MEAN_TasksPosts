import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/user.service";
import {Subscription} from "rxjs";
import {User} from '../shared/user';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [UserService]
})
export class UsersListComponent implements OnInit {
  sub: Subscription | undefined;
  users: User[] = [];
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  loadUsers() {
    this.sub = this.userService.getAllUsers()
      .subscribe(data => {
        this.users = data;
      })
    ;
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnDestroy() {
    if (this.sub != undefined) {
      this.sub.unsubscribe();
    }
  }

}


