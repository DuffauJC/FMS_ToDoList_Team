import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AuthenticateService } from 'src/app/service/authentificate.service';
import { Category } from '../models/category.model';
import { Tasks } from '../models/tasks.model';
import { Users } from '../models/users.model';
import { UserTasksComponent } from '../user-tasks/user-tasks.component';

@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.css']
})
export class CreateTasksComponent implements OnInit {
  myForm: FormGroup;
  categories : Category[]  =[];
  tasks : Tasks[] =[];
  category : Category | undefined;
  task : Tasks | undefined;
  error = null;
  
  newTask = {
    id: 0,
    nameTask: "",
    dateTask: new Date(),
    description: "",
    checked: false,
    // deleted: false,
    category: {} as Category,
    users: {} as Users
  };

  constructor(public apiService: ApiService, private router: Router, public authService: AuthenticateService, public userTasks : UserTasksComponent) { 
    this.myForm = new FormGroup({
      nameTask: new FormControl(this.newTask.nameTask),
      dateTask: new FormControl(this.newTask.dateTask),
      description: new FormControl(this.newTask.description),
      checked: new FormControl(false),
      // deleted: new FormControl(this.newTask.deleted),
      category: new FormControl(this.newTask.category),
      //users: new FormControl(this.newTask.user)
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.apiService.getCategories().subscribe({
      next: (data) => (this.categories = data),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }

  onAddTask(form: FormGroup): void{ 
    this.newTask.nameTask = form.value.nameTask
    this.newTask.dateTask = form.value.dateTask
    this.newTask.description = form.value.description
    this.newTask.checked = false;
    // this.newTask.deleted = false;
    this.newTask.category = form.value.category
    this.newTask.users = this.authService.getUserFromStorage();

    console.log(typeof this.authService.getUserFromStorage())
    console.log(this.authService.getUserFromStorage())
    console.log(this.newTask)
    
    if(confirm("Valider l'ajout de la tache ?")){
      this.apiService.saveTask(this.newTask).subscribe({
        next: (data) => console.log("data " + data),
        error: (err) => this.error = err.message,
        complete: () => this.error = null
       })
    }

    this.userTasks.closePopup();
  }
}
