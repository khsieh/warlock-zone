import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts/posts.service';
import { User } from '../../models/user';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  private postList:Post[] = [];
  private maxposts: number;
  private currentUser: User;
  private showCommentEntry: Boolean;

  private unsubmittedContent: string;

  constructor(private posts:PostsService) {} //, private userComp:ProfileComponent) { }

  ngOnInit() {
    this.maxposts = 10;
    this.showCommentEntry = false;
    this.unsubmittedContent = "";
    // this.currentUser = this.userComp.$user;
    this.currentUser = new User();
    this.currentUser.$username = "Cousin Seth";

    // Call service to get Posts from DB
    this.getPostsFromService();

  }

  unhidePost(){
    this.showCommentEntry = !this.showCommentEntry;
  }

  createPost(){

      let newPost = new Post();
      newPost.$author = this.currentUser;
      newPost.$content = this.unsubmittedContent;
      //newPost.$postID = 2; //get postID from DB
      if(this.unsubmittedContent == ""){
        alert("Please enter a message before submitting.")
        return;
      }
      this.postList.pop(); //removes last post (oldest post) from list
      this.postList.unshift(newPost); //append to front of list
      this.unsubmittedContent = ""; //reset unsubmttedConent to nothing
      this.showCommentEntry = false;
  }

  getPostsFromService(){
    //have to subscribe to getPosts() because it returns an observable (at least for now)
    this.posts.getPosts().subscribe((allPost) => {
      console.log("Fetching new posts for feed");
      //TODO: should become something like this
      //--have to return a list of posts to be sure--
      //allPost.forEach((post, index) => {
        // this.postList.push(post);
      //});
      
        for(var index = 0; index < this.maxposts; index++){
          let newPost = new Post();
          let getUserFromProfile = new User();
          // console.log("index: "+index)
          getUserFromProfile.$userID = allPost[index].userId;
          getUserFromProfile.$username = "Big Bang Gabe";
          newPost.$author = getUserFromProfile;
          newPost.$content = allPost[index].body;
          newPost.$postID = allPost[index].id;
          this.postList.push(newPost);
        }
      });

    };
}

