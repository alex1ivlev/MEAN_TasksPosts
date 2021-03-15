import {Component, OnInit, Input, Output} from '@angular/core';
import {User} from "../../shared/user";
import {UserService} from "../../shared/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user!: User;
  @Input() index!: number;
  isShowed: Boolean = false;
  updateForm: Boolean = false;
  sub: Subscription | undefined;
  private userId!: string;
  tasksCompleted: Boolean = true;

  constructor(private userService: UserService) {
  }

  showData() {
    this.isShowed = true;
  }

  toggleData() {
    this.isShowed = !this.isShowed;
  }

  ngOnInit(): void {
    let userTask = this.user.tasks;
    if (userTask) {
      this.tasksCompleted = userTask.every(t => t.completed)
    }
  }

  delete(id: string) {
    this.userService.deleteUser(id)
      .subscribe(status => {
        alert(status);
        window.location.reload();
      })
  }

  update(id: string, name: string) {
    this.sub = this.userService.updateUser(this.userId, this.user)
      .subscribe(status => {
        alert(status);
        window.location.reload();

      })
  }

}

