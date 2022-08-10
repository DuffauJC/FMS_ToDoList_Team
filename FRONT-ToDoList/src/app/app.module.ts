import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskModificationComponent } from './component/task-modification/task-modification.component';
import { UserTasksComponent } from './component/user-tasks/user-tasks.component';
import { LoginComponent } from './login/login.component';
import { CreateTasksComponent } from './component/create-tasks/create-tasks.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    UserTasksComponent,
    LoginComponent,
    TaskModificationComponent,
    CreateTasksComponent

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
