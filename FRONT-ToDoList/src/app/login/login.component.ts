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
    mail: "",
    password: ""
  }
  constructor(private apiService: ApiService,private router :Router) {
    
    this.ngForm = new FormGroup({
      mail: new FormControl(this.data.mail),
      password: new FormControl(this.data.password)
    })
   }

  ngOnInit(): void {
  }

  onLogin(form: FormGroup): void {
    //console.log(form.value);
    if (form.valid) {
      this.data.mail = form.value.mail
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
