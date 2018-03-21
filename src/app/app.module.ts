import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostComponent } from './components/post/post.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

//services
import { LoginService } from './services/login/login.service';



@NgModule({
  //components
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
    FeedComponent,
    PostComponent,
    NavBarComponent
  ],
  //modules, mostly from ng core
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    //separated routing
    AppRoutingModule
  ],
  //services, helper methods to handle connectivity to back end
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
