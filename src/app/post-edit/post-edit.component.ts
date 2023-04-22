import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../service/posts.service';
import { Post } from '../model/posts.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  isEdit: boolean = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagePath = '';

    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        this.index = params['index'];
        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;
        this.isEdit = true;
      }
    });

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required]),
    });
  }

  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;
    const numberOfLikes = this.form.value.numberOfLikes;

    const post: Post = new Post(
      title,
      description,
      imagePath,
      'leotutory@gmail.com',
      new Date(),
      numberOfLikes
    );

    if (this.isEdit) {
      this.postService.updatePosts(this.index, post);
    } else {
      this.postService.addPosts(post);
    }
    console.log(this.form);

    this.router.navigate(['/post-list']);
  }
}
