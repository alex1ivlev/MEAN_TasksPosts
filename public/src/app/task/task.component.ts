import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../shared/task';
import {UserService} from "../shared/user.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {User} from "../shared/user";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  private sub!: Subscription;
  private user!: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  setToCompletedTask() {
    this.sub = this.userService.completeTask(this.user._id, this.task._id)
      .subscribe(data => console.log(data));
  }

}

