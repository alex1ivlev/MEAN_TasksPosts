import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../shared/post";
import {User} from "../shared/user";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  @Input() user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
