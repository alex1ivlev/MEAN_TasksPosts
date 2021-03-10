import {Component, OnInit, Input, Output} from '@angular/core';
import {User} from "../../shared/user";
import {UserService} from "../../shared/user.service";



@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user!: User;
  @Input() index!: number;

  isShowed: Boolean = false;

  constructor(private userService: UserService) { }
  showData() {
    this.isShowed = true;
  }
  toggleData() {
    this.isShowed = !this.isShowed;
  }

  ngOnInit(): void {
  }

  delete(id: string)
  {
    this.userService.deleteUser(id)
      .subscribe(status =>
      {
        alert(status);
        window.location.reload();
      })
  }

  }


