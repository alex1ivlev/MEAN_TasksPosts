import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from "../shared/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import {Post} from "../shared/post";
import {User} from "../shared/user";

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {
  private sub!: Subscription;
  private user!: User;
  public post: Post = new Post(null, " ", " ");

  constructor (private userService: UserService, public dialogRef: MatDialogRef<AddNewPostComponent>,
  @Inject(MAT_DIALOG_DATA) public data: { user_id: string }) { }

  ngOnInit(): void {
  }
  addToPosts() {
    this.sub = this.userService.addPost(this.data.user_id, this.post).subscribe(newpost => {
      this.post = newpost;
      this.dialogRef.close(newpost);
    });
  }
}
