import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { AuthenticateService } from '../service/authentificate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  error=false;
  ngForm: FormGroup
  data = {
    mail: "",
    password: ""
  }
  constructor(private apiService: ApiService, private router: Router, private authenticateService: AuthenticateService,) {
    
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

      console.log(this.data)
     
      let ok = this.authenticateService.veriFyLogin(this.data)
      console.log(ok)

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
