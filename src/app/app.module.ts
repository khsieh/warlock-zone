import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

=======
import { HttpModule } from '@angular/http';
>>>>>>> 1ab0f95b34585bfd0af65e25d223e83ac6f66c30
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './components/home/home.component';

//services
import { LoginService } from './services/login/login.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { PostsService } from './services/posts/posts.service';

@NgModule({
  //components
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
    FeedComponent,
    PostComponent,
    HomeComponent,
    ErrorPageComponent,
    EditProfileComponent
  ],
  //modules, mostly from ng core
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    NgbModule.forRoot(),
=======
    HttpModule,
>>>>>>> 1ab0f95b34585bfd0af65e25d223e83ac6f66c30
    //separated routing
    AppRoutingModule
  ],
  //services, helper methods to handle connectivity to back end
  providers: [
    LoginService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
