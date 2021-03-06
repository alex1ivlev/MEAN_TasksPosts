import {Component, OnInit, Input} from '@angular/core';
import {UserService} from '../shared/user.service';
import {Router, ActivatedRoute, ParamMap, NavigationEnd} from '@angular/router';
import {User} from '../shared/user';
import {merge, Observable, of, Subscription} from 'rxjs';
import {Task} from '../shared/task';
import {Post} from '../shared/post';
import {filter, map, switchMap} from "rxjs/operators";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AddNewTaskComponent} from "../add-new-task/add-new-task.component";
import {AddNewPostComponent} from "../add-new-post/add-new-post.component";

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
  public user!: User;
  toggleTask: boolean = false;
  togglePost: boolean = false;
  userPost: Post = new Post(' ', ' ', " ");
  showSideNav$: Observable<boolean> | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
    this.onShowSideNav();
  }

  public closeDetails() {
    this.router.navigate(["."], {relativeTo: this.route.parent});
  }

  public onShowSideNav() {
    // check if there's an id in URL
    const initParams$ =
      of(this.route.firstChild ?
        this.route.firstChild.params : null
      );
    // still subscribe to router's event
    const params$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      switchMap(_ => {
        return this.route.firstChild ?
          this.route.firstChild.params : of(false);
      }),
      map(params => !!params)
    );

    // merge 2 Observables together
    this.showSideNav$ = merge(initParams$, params$).pipe(
      map(data => !!data)
    );
  }

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

  completeTaskStatus(taskId) {
    if (this.user.tasks != undefined) {

      let selectedTask = this.user.tasks.find((task) => task._id === taskId);
      if (selectedTask) {
        selectedTask.completed = true;
        this.sub3 = this.userService.updateUser(this.userId, this.user)
          .subscribe(data => console.log(data));
      }
    }
  }


  addTask() : void {
    const dialogRef = this.dialog.open(AddNewTaskComponent, {
      width: '400px',
      data: {
        user_id: this.user._id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user.tasks?.push(result)
    });
  }

  addPost() : void {
    const dialogRef = this.dialog.open(AddNewPostComponent, {
      width: '400px',
      data: {
        user_id: this.user._id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user.posts?.push(result)
    });
  }
}
