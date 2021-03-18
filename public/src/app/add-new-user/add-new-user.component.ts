import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user'
import {Subscription} from "rxjs";
import {UserService} from "../shared/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {
  newuser: User = new User('', '', '', '', '', 0);
  sub: Subscription | undefined;
  constructor(private router: Router, private userService: UserService) { }

  save() {
    this.sub = this.userService.addUser(this.newuser)
      .subscribe(status => {
        alert(status);
        this.router.navigate(['/users']);
      });
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    if (this.sub != undefined) {
      this.sub.unsubscribe();
    }
  }
}
