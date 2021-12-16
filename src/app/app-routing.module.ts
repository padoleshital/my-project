import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsRoutingModule } from './students/students-routing.module';
import { StudentsModule } from './students/students.module';
const routes: Routes = [
  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StudentsRoutingModule,
    StudentsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
