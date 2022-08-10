import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Category } from '../models/category.model';
import { Tasks } from '../models/tasks.model';


@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {

  categories: Category[] = [];
  tasks: Tasks[] = [];
  category: Category | undefined;
  task: Tasks | undefined;
  error = null;

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
   // console.log(this.categories + "-----------------------------" + this.tasks);
    this.getAllTasks();
    this.getAllCategories();
    //console.log(this.categories + "+++++++++++++++++++++++++++++++" + this.tasks);
  }


  getAllTasks() {
    this.apiService.getUserTasks().subscribe({
      next: (data) => (this.tasks = data
        //console.log("-------->" + data), this.tasks.forEach(t => console.log(t))
      ),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });

  }

  getAllCategories() {
    this.apiService.getCategories().subscribe({
      next: (data) => (this.categories = data
       // console.log("-------->" + data, this.categories.forEach(c => console.log(c)))
      ),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }

  getTaskById(id: number) {
    this.apiService.getUserTask(id).subscribe({
      next: (data) => (this.task = data),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }

  getCategoryById(id: number) {
    this.apiService.getCategory(id).subscribe({
      next: (data) => (this.category = data),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }

  // delete task
  delTask(task:Tasks) {
    if (confirm("Vous êtes sur de vouloir supprimer cette tache?")) {
      this.apiService.delTask(task)
        .subscribe({
          //next: (data) => console.log(data),
          error: (err) => this.error = err.message,
          complete: () => this.getAllTasks()
        })
    }

  }
}
