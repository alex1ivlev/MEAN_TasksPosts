import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../shared/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  setToCompletedTask() {
    let _id: any;
    ({_id} = this.task);
    this.notify.emit(_id);
    window.location.reload();
  }
}
