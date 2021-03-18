import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import {UserService} from "../shared/user.service";
import {User} from "../shared/user";
import {Task} from "../shared/task";

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.css']
})
export class AddNewTaskComponent implements OnInit {
  private sub!: Subscription;
  private user!: User;
  public task: Object = new Task(null, "", false);

  constructor(private userService: UserService, public dialogRef: MatDialogRef<AddNewTaskComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { user_id: string }) {
  }

  ngOnInit(): void {
  }

  addToTasks() {
    this.sub = this.userService.addTask(this.data.user_id, this.task).subscribe(tsk => {
      this.task = tsk;
      this.dialogRef.close(tsk);
    });
  }
}
