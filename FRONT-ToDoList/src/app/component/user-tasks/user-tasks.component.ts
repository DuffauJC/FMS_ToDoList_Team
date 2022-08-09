import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {
  myForm: FormGroup;
  listCategories: Category[] | undefined;
  error = null;

  //modal add article
  displayStyle = "none";
  displayBlur = "blur(0)"
  display = false

  newTask = {
    id: 0,
    nameTask: "",
    dateTask: new Date(),
    description: "",
    checked: false,
    deleted: false,
    category: {} as Category
  };

  constructor(public apiService: ApiService, private router: Router) { 
    this.myForm = new FormGroup({
      nameTask: new FormControl(this.newTask.nameTask),
      dateTask: new FormControl(this.newTask.dateTask),
      description: new FormControl(this.newTask.description),
      checked: new FormControl(this.newTask.checked),
      deleted: new FormControl(this.newTask.deleted),
      category: new FormControl(this.newTask.category)
    });
  }

  ngOnInit(): void {
  }

  openPopup() {
    this.displayStyle = "block";
    this.displayBlur = "blur(4px)";
  }

  onAddTask(form: FormGroup): void{ 
    //myForm (quand udpate) ou le newTask (quand new task)

    
    this.newTask.nameTask = form.value.nameTask
    this.newTask.dateTask = form.value.dateTask
    this.newTask.description = form.value.description
    this.newTask.checked = false;
    this.newTask.deleted = false;
    this.newTask.category = form.value.category
    console.log(this.newTask)
    
    if(confirm("Valider l'ajout de la formation ?")){
      this.apiService.saveTask(this.newTask).subscribe({
        next: (data) => console.log("data " + data),
        error: (err) => this.error = err.message,
        complete: () => this.error = null
       })
    }
  }

  closePopup() {
    this.displayStyle = "none";
    this.displayBlur = "blur(0)"
  }

}
