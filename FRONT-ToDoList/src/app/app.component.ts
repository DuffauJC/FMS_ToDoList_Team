

import { ApiService } from 'src/app/service/api.service';
import { Tasks } from './component/models/tasks.model';
import { UserTasksComponent } from './component/user-tasks/user-tasks.component';

import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from './service/authentificate.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'FRONT-ToDoList';


  tasks : Tasks[] =[];
  task : Tasks | undefined;
  error = null;

  
  userNotOk=false
  name = ""
  loggin = true
  logout = false
  display = false

  
  constructor(private authenticateService: AuthenticateService, private router: Router, private apiService : ApiService) {

  }

  ngOnInit(): void {
  this.getAllTasks();
  this.showName();

  }

  getAllTasks() {
    this.apiService.getUserTasks().subscribe({
      next: (data) => (this.tasks=data, console.log("-------->" +data), this.tasks.forEach(t => console.log(t)) ),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });

  }

  onSearch(){
      this.apiService.getTasksBySearch(description).subscribe({
        next: (data) => (this.tasks=data,
           console.log("++++++++++" +data), this.tasks.forEach(t => console.log(t)) 
           ),
        error: (err) => (this.error = err.message),
        complete: () => (this.error = null),
      });
  
    }
  



  ngDoCheck(): void {
    this.showName()

  }
  showName() {
    let rep = this.authenticateService.getUserFromStorage()
    if (rep != null) {
      this.name=rep.mail
      this.display = true
      this.loggin = false
      this.logout = true
    }
  }

  disconnect() {
    this.authenticateService.removeUserFromStorage()
    this.display = false
    this.loggin = true
    this.logout = false
    this.router.navigateByUrl('home')
  }


}

