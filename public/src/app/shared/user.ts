import { Post } from "./post";
import { Task } from "./task";

export class User {
  [x: string]: any;

  constructor(
    public _id: string, public name: string, public email: string, public street?: string,
    public city?: string, public zipcode?: number,
    public tasks?: Task[], public posts?: Post[])
  {}
}
