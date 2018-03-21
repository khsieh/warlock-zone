import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';


import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    login_username: string;
    login_password: string;

    constructor(private loginService:LoginService, private router:Router) { }

    ngOnInit() {
    }

    
    validate():void {
        console.log('validating user: ' + this.login_username);
        this.router.navigate(['home']);
    }

    register():void{
        console.log("Registering user!");
    }

}
