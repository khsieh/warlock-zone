import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../../models/post';

@Injectable()
export class PostsService {

  constructor(public http:Http, public httpClient:HttpClient) {
    console.log("Fetching Posts");

  }
    
  getPostsss(){
    return this.httpClient.post('http://13.58.228.189/RecentPosts',{},{responseType: 'text', observe: 'response'});

    // let url:string = 'http://13.58.228.189/RecentPosts';
    // let jsonUrl:string = 'https://jsonplaceholder.typicode.com/posts';
    // var returned = this.http.get(url);//.map(res => res.json());
    // console.log("Returned: "+(returned));
    // return returned;
    //TODO:
    //Will call servlets here to get posts
  }

  getPosts(){

    return this.httpClient.post('http://13.58.228.189/RecentPosts',{},{responseType: 'text', observe: 'response'});

  }

  addPost(post: Post){
    return this.httpClient.post('URL',post.getJSON(),{responseType: 'text', observe: 'response'});
  }

}
