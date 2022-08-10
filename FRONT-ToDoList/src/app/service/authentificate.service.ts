import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })

export class AuthenticateService {

    error = null
    ok=true
    constructor( private apiService: ApiService) {
    }
    // login verification
    veriFyLogin(data: any) {
        //console.log(data)
        
        this.apiService.login(data).subscribe(response => {
            //console.log(response)

            //if existant user mail in response && decode password verif
            if (response.mail === data.mail && response.password === data.password) {
                this.setUserInStorage({
                    id:response.id,
                    mail: response.mail,
                    active:response.active
                   
                })
                this.ok = true
            } else {
                this.ok = false
            }
        })
        if (this.ok) {
            console.log('ok');
            return true
        } else {
            console.log('false');
            return false
        }

    }

    // set customer in storage
    setUserInStorage(data: any) {
        localStorage.setItem('user', JSON.stringify(data));

    }
    // get customer from storage
    getUserFromStorage() {
        let user = localStorage.getItem('user');
        if (user) return JSON.parse(user);
        return new User(0,true,"")
    }
    removeUserFromStorage() {
        localStorage.removeItem('user')
    }
}