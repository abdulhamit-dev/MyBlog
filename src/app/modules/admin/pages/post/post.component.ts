import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/posts';
import { PostService } from 'src/app/core/services/post.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post = new Post();
  posts:Post[]=[]

  public Editor = ClassicEditor;
  editorContent: string="";
  constructor(private postService: PostService) {}

  ngOnInit(){
    this.postService.getPosts().subscribe(rv=>{
      this.posts=rv as any
    })
  }

  add() {
    this.postService.addPost(this.post);
  }

  save(){
    console.log(this.editorContent)
  }
}
