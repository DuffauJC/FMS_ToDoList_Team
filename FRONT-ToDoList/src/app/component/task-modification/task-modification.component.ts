import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from 'src/app/service/api.service';
import { Tasks } from '../models/tasks.model';



@Component({
  selector: 'app-task-modification',
  templateUrl: './task-modification.component.html',
  styleUrls: ['./task-modification.component.css']
})
export class TaskModificationComponent implements OnInit {

  tasks : Tasks | undefined;

  reactiveForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl(),
    category: new FormControl(),
    checked: new FormControl(),
    date: new FormControl()
  })

  constructor(    private route: ActivatedRoute,
    private router: Router, private apiService:ApiService , private reactive : ReactiveFormsModule) {

  }

  ngOnInit(): void {

  }

  submitModification(){

//Tasksask Tasks =new Tasks(null,this.reactiveForm.get("name"), this.reactiveForm.get("date"), this.reactiveForm.get("description"),this.reactiveForm.get("checked"), this.reactiveForm.get("category"),  null)

    }


}

