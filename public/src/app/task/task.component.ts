import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../shared/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  constructor() {}

  ngOnInit(): void {}

  setToCompletedTask() {
    this.task.completed = true;
    //TODO save to db
  }
}
