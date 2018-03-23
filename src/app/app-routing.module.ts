import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { LoginComponent } from './components/login/login.component';
import { FeedComponent } from './components/feed/feed.component';

const routes: Routes = [
    {path:'login',component:LoginComponent},
    //{path: 'feed', component:FeedComponent},
    {path:'**', component:LoginComponent} //change this to a 404 error page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
