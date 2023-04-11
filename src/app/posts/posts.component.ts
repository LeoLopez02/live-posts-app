import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/posts.model';
import { PostService } from '../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input() post?: Post;
  @Input() index: number = 0;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    console.log(this.post);
    console.log(this.index);
  }

  onDelete() {
    console.log(this.post);
    console.log(this.index);
    this.postService.deletePosts(this.index);
  }
}
