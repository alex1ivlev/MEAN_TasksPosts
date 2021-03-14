import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AddNewUserComponent} from './add-new-user/add-new-user.component';
import {UsersListComponent} from './users-list/users-list.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {TasksAndPostsComponent} from './tasks-posts/tasks-posts.component';
import {UserItemComponent} from "./users-list/user-item/user-item.component";
import {OtherDataComponent} from "./other-data/other-data.component";
import {TaskComponent} from './task/task.component';
import {PostComponent} from './post/post.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';


const appRoutes: Routes = [
  {
    path: "users",
    component: UsersListComponent,
    children:
      [
        {
          path: ":id",
          component: TasksAndPostsComponent
        }]
  },
  {
    path: "adduser",
    component:  AddNewUserComponent
  },
  {
    path: "search",
    component: SearchBarComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddNewUserComponent,
    UsersListComponent,
    SearchBarComponent,
    TasksAndPostsComponent,
    UserItemComponent,
    OtherDataComponent,
    TaskComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  exports: [
    UserItemComponent,
    OtherDataComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
