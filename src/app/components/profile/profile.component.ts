import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FeedComponent } from '../feed/feed.component';
import { ToggleNewPostService } from '../../services/util/toggle-new-post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [FeedComponent]
})
export class ProfileComponent implements OnInit {

    private viewPost = false;
    constructor(
        private router:Router, 
        private editModal:NgbModal, 
        private feed:FeedComponent,
        private tService:ToggleNewPostService
    ) { }

    ngOnInit() {
    }

    editProfile(){
        const modalRef = this.editModal.open(EditProfileComponent);

    }

    newPostControl(){
        this.viewPost = !this.viewPost;
        this.tService.changeDisplay(this.viewPost);
    }
}
