import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { TaskModificationComponent } from './component/task-modification/task-modification.component';
import { UserTasksComponent } from './component/user-tasks/user-tasks.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'userTasks', component: UserTasksComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editTask', component: TaskModificationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
