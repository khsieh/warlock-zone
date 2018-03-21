import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    //change to user
    //use user.first + user.last
    name: string = 'Cousin Seth';

    constructor() { }

    ngOnInit() {
    }

}
