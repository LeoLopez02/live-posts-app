import { Injectable } from '@angular/core';
import { PostService } from './posts.service';
import { Post } from '../model/posts.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BackEndService {
  dataBasePath: string =
    'https://live-posts-e11b9-default-rtdb.firebaseio.com/';
  constructor(private postService: PostService, private http: HttpClient) {}
  // Functionality to SAVE
  saveData() {
    const listOfPosts: Post[] = this.postService.getPosts();
    this.http
      .put(this.dataBasePath + '/posts.json', listOfPosts)
      .subscribe((response) => {
        console.log(response);
      });
  }
  // Functionality to FETCH
  fetchData() {
    this.http
      .get<Post[]>(this.dataBasePath + '/posts.json')
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);
          this.postService.setPosts(listOfPosts);
        })
      )
      .subscribe();
  }
}
