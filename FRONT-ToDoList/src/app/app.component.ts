import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from './service/authentificate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'FRONT-ToDoList';

  userNotOk=false
  name = ""
  loggin = true
  logout = false
  display = false

  constructor(private authenticateService: AuthenticateService, private router: Router) {

  }

  ngOnInit(): void {
    this.showName()

  }
  ngDoCheck(): void {
    this.showName()

  }
  showName() {
    let rep = this.authenticateService.getUserFromStorage()
    if (rep != null) {
      this.name=rep.mail
      this.display = true
      this.loggin = false
      this.logout = true
    }
  }

  disconnect() {
    this.authenticateService.removeUserFromStorage()
    this.display = false
    this.loggin = true
    this.logout = false
    this.router.navigateByUrl('home')
  }


}
