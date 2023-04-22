import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/posts.model';
import { PostService } from '../service/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input() post?: Post;
  @Input() index: number = 0;

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.post);
    console.log(this.index);
  }

  onDelete() {
    this.postService.deletePosts(this.index);
  }

  onEdit() {
    this.router.navigate(['/post-edit', this.index]);
  }
}
