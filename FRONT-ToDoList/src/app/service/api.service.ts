import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tasks } from '../component/models/tasks.model';
import { Category } from '../component/models/category.model';
// import { Category } from '../model/category.model';


@Injectable({ providedIn: 'root' })

export class ApiService {
    constructor(private http: HttpClient) { }
    
    //get usertask
    public getUserTasks(): Observable<any[]> {
        return this.http.get<Tasks[]>(environment.host + "/task/all")
    }

    public saveTask(task : Tasks){
        return this.http.post<Tasks>(environment.host + "/api/saveTask", task);
    }

    public login(data: any) {
        console.log(data)
        return this.http.post<any>(environment.host + "/login/", data.mail)
    }
    public getUserTask(id: number) {
        return this.http.get<Tasks>(environment.host + "/task" + id)
    }

    public getCategories() {
        return this.http.get<Category[]>(environment.host + "/category/all")
    }

    public getCategory(id: number) {
        return this.http.get<Category>(environment.host + "/category" + id)
    }

    public editTask(task: Tasks) {

        return this.http.post<Tasks>(environment.host + "/editTask", task)
    }


}
