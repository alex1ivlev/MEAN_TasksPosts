import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../shared/user';
import { Subscription } from 'rxjs';
import { Task } from '../shared/task';
import { Post } from '../shared/post';

@Component({
  selector: 'app-tasks-posts',
  templateUrl: './tasks-posts.component.html',
  styleUrls: ['./tasks-posts.component.css'],
})
export class TasksAndPostsComponent implements OnInit {
  sub1: Subscription | undefined;
  sub2: Subscription | undefined;
  sub3: Subscription | undefined;

  userId: string = '';
  user: User = new User(' ', ' ', ' ', ' ', ' ', 0);
  toggleTask: boolean = false;
  userTask: Task = new Task( ' ', ' ', "boolean" );
  togglePost: boolean = false;
  userPost: Post = new Post(' ', ' ');

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.sub1 = this.route.params.subscribe((param) => {
      this.userId = param['id'];
      this.sub2 = this.userService.getUser(this.userId).subscribe(data => this.user = data);
    });
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
    if (this.sub3) {
      this.sub3.unsubscribe();
    }
  }

  backToUsers() {
   this.router.navigate(['/']);
  }

  completeTaskStatus(taskId: string) {
    // @ts-ignore
    const selectedTask = this.user.tasks.find((task) => task._id === taskId);
    if (selectedTask) {
      // @ts-ignore
      selectedTask.completed = true;
      this.sub3 = this.userService.updateUser(this.userId, this.user)
        .subscribe(data => console.log(data));
    }
  }

  addNewTask(isValid: boolean) {
    if (isValid) {
      const newTask = { title: this.userTask.title, completed: false };
      // @ts-ignore
      this.user.tasks.push(newTask);
      this.sub3 = this.userService.updateUser(this.userId, this.user)
        .subscribe(data =>{ this.toggleTask = false; window.location.reload()});
    }
  }

  addNewPost(isValid: boolean) {
    if (isValid) {
      const newPost = { title: this.userPost.title, body: this.userPost.body };
      // @ts-ignore
      this.user.posts.push(newPost);
      this.sub3 = this.userService.updateUser(this.userId, this.user)
        .subscribe(data => this.togglePost = false);
    }
  }
}
