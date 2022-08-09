import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tasks } from '../model/tasks.model';

@Injectable({ providedIn: 'root' })

export class ApiService {
    constructor(private http: HttpClient) { }
    
    public getUserTasks(): Observable<any[]> {
        return this.http.get<any>(environment.host + "/readTasks")
    }
 
    public saveTask(task : Tasks){
        return this.http.post<Tasks>(environment.host + "/api/saveTask", task);
    }
   
    // public login(data: any) {
    //     return this.http.post<any>(environment.host + "/login", data)
    // }

}