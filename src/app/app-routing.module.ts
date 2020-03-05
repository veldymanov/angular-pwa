import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonsComponent } from "./lessons/lessons.component";
// import { AppShellComponent } from './app-shell/app-shell.component';


const routes: Routes = [
  {
    path: '',
    component: LessonsComponent
  },
  // { path: '', component: AppShellComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
