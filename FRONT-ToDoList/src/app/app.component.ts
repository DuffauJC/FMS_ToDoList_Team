import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Tasks } from './component/models/tasks.model';
import { UserTasksComponent } from './component/user-tasks/user-tasks.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONT-ToDoList';

  tasks : Tasks[] =[];
  task : Tasks | undefined;
  error = null;

  constructor(private apiService : ApiService){}

  ngOnInit(): void {
  this.getAllTasks();

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
  }

