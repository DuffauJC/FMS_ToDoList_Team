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
    public getUserTasks() {
     // console.log("truc ----------" + this.http.get<any[]>(environment.host + "/task/all"))
        return this.http.get<any[]>(environment.host + "/task/all")
    }

    public login(data: any) {
       // console.log(data)
        return this.http.get<any>(environment.host + "/api/login/"+ data.mail)
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

    public delTask(task: Tasks) {
        return this.http.delete(environment.host +"/task/deleteTask/"+task.id)
    }
}
