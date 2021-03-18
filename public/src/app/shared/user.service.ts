import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import {Task} from "./task";
import {Post} from "./post";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getAllUsers()
  {
    return this.http.get<User[]>("http://localhost:3000/api/users/");
  }

  getUser(id : string)
  {
    return this.http.get<User>("http://localhost:3000/api/users/" + id);
  }

  addUser(newuser : User) {
    return this.http.post("http://localhost:3000/api/users/", newuser);
  }

  updateUser(id : string , user : User)
  {
    return this.http.put("http://localhost:3000/api/users/" + id, user);
  }

  deleteUser(id: string)
  {
    return this.http.delete("http://localhost:3000/api/users/" + id);
  }

  async searchUser(name: string, email: string)
  {
    let allUsers =  await  this.http.get<User[]>("http://localhost:3000/api/users/").toPromise();

    if(name.length > 0)
    {
      allUsers = allUsers.filter(x => x.name.includes(name))
    }

    if(email.length > 0)
    {
      allUsers = allUsers.filter(x => x.email.includes(email))
    }

    return allUsers;
  }

  addTask(id: string, task: Task)
  {
    return this.http.post("http://localhost:3000/api/users/" + id + "/task", task);
  }

  addPost(id: string, post: Post)
  {
    return this.http.post("http://localhost:3000/api/users/" + id + "/post", post);
  }

  completeTask(id: string, task_id: string) {
    return this.http.put("http://localhost:3000/api/users/" + id + "/task", task_id);
  }
}
