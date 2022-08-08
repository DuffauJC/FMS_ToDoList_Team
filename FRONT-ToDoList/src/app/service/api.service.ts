import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

// import { Category } from '../model/category.model';


@Injectable({ providedIn: 'root' })

export class ApiService {
    constructor(private http: HttpClient) { }
    
    //get usertask
    public getUserTasks(): Observable<any[]> {
        return this.http.get<any>(environment.host + "/usertasks")
    }
 
   
   
    public login(data: any) {
 
        return this.http.post<any>(environment.host + "/login", data)
    }




}