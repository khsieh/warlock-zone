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
        // this.loginService.validateUser(this.fusername,this.fpassword).subscribe(
        //     resp=>{
        //         // console.log(resp);
        //         let respJson = JSON.parse(resp.body);
                
        //         sessionStorage.setItem("uid", respJson.uid);
        //         sessionStorage.setItem("firstname", respJson.firstname);
        //         sessionStorage.setItem("lastname", respJson.lastname);
        //         sessionStorage.setItem("username", respJson.username);
        //         sessionStorage.setItem("password", respJson.password);
        //         sessionStorage.setItem("email",respJson.email);
        //         sessionStorage.setItem("rid", respJson.rid);
                
        //         console.log(sessionStorage.getItem("uid"));

        //         // console.log(s);
        //         console.log(resp.status);
        //         if(resp.status == 211){
        //             console.log("This is a Employee");
        //             this.router.navigate(['ehome']);
        //         }
        //         else if (resp.status == 212){
        //             console.log("This is a manager");
        //             this.router.navigate(['mhome']);
        //         }
        //     },
        //     err=>{
        //         //show alert??
                
        //         console.log(err.status);
        //     }
        // );
    }

}
