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
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  myForm: FormGroup;
  categories : Category[]  =[];
  tasks : Tasks[] =[];
  category : Category | undefined;
  task : Tasks | undefined;
  error = null;
  taskToEdit! : Tasks;


  constructor(public apiService: ApiService, private router: Router, public authService: AuthenticateService, public userTasks : UserTasksComponent) {
    this.taskToEdit = userTasks.getTargetTask();
    this.myForm = new FormGroup({
      nameTask: new FormControl(this.taskToEdit.nameTask),
      dateTask: new FormControl(this.taskToEdit.dateTask),
      description: new FormControl(this.taskToEdit.description),
      checked: new FormControl(false),
      // deleted: new FormControl(this.newTask.deleted),
      category: new FormControl(this.taskToEdit.category),
      //users: new FormControl(this.newTask.user)
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
    console.log(this.taskToEdit.nameTask);
  }

  getAllCategories() {
    this.apiService.getCategories().subscribe({
      next: (data) => (this.categories = data),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    });
  }

  onEditTask(form: FormGroup): void{
    this.taskToEdit.nameTask = form.value.nameTask
    this.taskToEdit.dateTask = form.value.dateTask
    this.taskToEdit.description = form.value.description
    this.taskToEdit.checked = false;
    // this.newTask.deleted = false;
    this.taskToEdit.category = form.value.category
    this.taskToEdit.users = this.authService.getUserFromStorage();

    if(confirm("Valider l'ajout de la formation ?")){
      this.apiService.saveTask(this.taskToEdit).subscribe({
        next: (data) => console.log(data),
        error: (err) => this.error = err.message,
        complete: () => this.error = null
       })
    }

    this.userTasks.closePopup();
  }
}
