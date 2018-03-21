import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'**', component:LoginComponent} //change this to a 404 error page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }