import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  error=true;
  ngForm: FormGroup
  data = {
    username: "",
    password: ""
  }
  constructor(private apiService: ApiService,private router :Router) {
    
    this.ngForm = new FormGroup({
      username: new FormControl(this.data.username),
      password: new FormControl(this.data.password)
    })
   }

  ngOnInit(): void {
  }

  onLogin(form: FormGroup): void {
    //console.log(form.value);
    if (form.valid) {
      this.data.username = form.value.username
      this.data.password = form.value.password

      //console.log(this.data)
     
      let ok = this.apiService.login(this.data)
      console.log(ok)
      if (ok) {
          setTimeout(() => {
              this.error = false
              this.router.navigateByUrl('userTasks')
          }, 1500)
      } else {
          this.error = true
      }
    }
  }
}
