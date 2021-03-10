import {Component, Input, OnInit} from '@angular/core';
import {User} from '../shared/user';
import {Subscription} from "rxjs";
import { ActivatedRoute} from "@angular/router";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-other-data',
  templateUrl: './other-data.component.html',
  styleUrls: ['./other-data.component.css']
})
export class OtherDataComponent implements OnInit {
  userid : number = 0;
  sub1: Subscription | undefined;
  sub2: Subscription | undefined;
  // @ts-ignore
  @ Input()userData : User

  isSectionVisible : boolean = false;

  constructor(private ar : ActivatedRoute, private userService: UserService) { }


  ngOnInit(): void {
    this.sub1 = this.ar.params.subscribe(data =>
    {
      this.userid = data["id"];
      //sends the user's id to the service to get his data
      this.sub2 = this.userService.getUser(String(this.userid))
        .subscribe(user => this.userData = user);

    })
  }
  ngOnDestroy() {
    if (this.sub1 != undefined) {
      this.sub1.unsubscribe();
    }
    if (this.sub2 != undefined) {
      this.sub2.unsubscribe();
    }
  }
}
