import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    //change to user
    //use user.first + user.last
    // name: string = 'Cousin Seth';

    constructor(private router:Router, private editModal:NgbModal) { }

    ngOnInit() {
    }

    editProfile(){
        const modalRef = this.editModal.open(EditProfileComponent);

    }

}
