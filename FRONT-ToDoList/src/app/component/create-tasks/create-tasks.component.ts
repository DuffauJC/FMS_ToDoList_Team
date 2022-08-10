import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { ApiService } from 'src/app/service/api.service';
import { AuthenticateService } from 'src/app/service/authentificate.service';
import { Category } from '../models/category.model';
import { Tasks } from '../models/tasks.model';

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
    user: {} as User
  };

  constructor(public apiService: ApiService, private router: Router, public authService: AuthenticateService) { 
    this.myForm = new FormGroup({
      nameTask: new FormControl(this.newTask.nameTask),
      dateTask: new FormControl(this.newTask.dateTask),
      description: new FormControl(this.newTask.description),
      //checked: new FormControl(this.newTask.checked),
      // deleted: new FormControl(this.newTask.deleted),
      category: new FormControl(this.newTask.category)
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
    this.newTask.user = this.authService.getUserFromStorage();
    console.log(typeof this.authService.getUserFromStorage())
    console.log("user : " + this.authService.getUserFromStorage())
    console.log(this.newTask)
    
    if(confirm("Valider l'ajout de la formation ?")){
      this.apiService.saveTask(this.newTask).subscribe({
        next: (data) => console.log("data " + data),
        error: (err) => this.error = err.message,
        complete: () => this.error = null
       })
    }
  }
}
