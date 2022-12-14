import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTasksComponent } from './component/user-tasks/user-tasks.component';
import { LoginComponent } from './login/login.component';
import { CreateTasksComponent } from './component/create-tasks/create-tasks.component';

import { EditTaskComponent } from './component/edit-task/edit-task.component';

import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    UserTasksComponent,
    LoginComponent,
    CreateTasksComponent,
    EditTaskComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
