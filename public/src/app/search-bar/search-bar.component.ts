import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user'
import {UserService} from "../shared/user.service";


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchResult : User[] = [];
  constructor(private utils : UserService) { }

  ngOnInit(): void {
  }

  async search(name : string, email : string)
  {

    this.searchResult = await this.utils.searchUser(name, email);

  }
  }

