import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
    { path: '', component: TaskFormComponent },
    { path: 'formulario', component: FormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
