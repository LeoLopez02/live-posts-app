import { EventEmitter, Injectable } from '@angular/core';
import { Post } from '../model/posts.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listOfPostsChanged: EventEmitter<Post[]> = new EventEmitter();

  listOfPosts: Post[] = [
    // new Post(
    //   'My post',
    //   'A description for this post.',
    //   'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d96bb958-4e6c-4ce0-9447-fbe226fbbecf/dftmcgu-0ec98510-36aa-4be2-8625-7ed4655b4a30.jpg',
    //   'Leo Tutory is the author',
    //   new Date(),
    //   0
    // ),
    // new Post(
    //   'My post',
    //   'A description for this post.',
    //   'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d96bb958-4e6c-4ce0-9447-fbe226fbbecf/dftmcgu-0ec98510-36aa-4be2-8625-7ed4655b4a30.jpg',
    //   'Leo Tutory is the author',
    //   new Date(),
    //   0
    // ),
    // new Post(
    //   'My post',
    //   'A description for this post.',
    //   'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d96bb958-4e6c-4ce0-9447-fbe226fbbecf/dftmcgu-0ec98510-36aa-4be2-8625-7ed4655b4a30.jpg',
    //   'Leo Tutory is the author',
    //   new Date(),
    //   0
    // ),
  ];

  //facility get
  getPosts() {
    return this.listOfPosts;
  }

  //facility delete
  deletePosts(index: number) {
    this.listOfPosts.splice(index, 1);
  }

  //facility add
  addPosts(post: Post) {
    this.listOfPosts.push(post);
  }

  //facility update
  updatePosts(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }

  getPost(index: number) {
    return this.listOfPosts[index];
  }

  likePost(index: number) {
    this.listOfPosts[index].numberOfLikes += 1;
  }

  setPosts(listOfPosts: Post[]) {
    this.listOfPosts = listOfPosts;
    this.listOfPostsChanged.emit(listOfPosts);
  }
}
