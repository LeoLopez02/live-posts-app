import { Component, OnInit } from '@angular/core';
import { Post } from '../model/posts.model';
import { PostService } from '../service/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  listOfPosts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {}
}
