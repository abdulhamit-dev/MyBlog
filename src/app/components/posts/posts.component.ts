import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/core/models/posts";
import { PostService } from "src/app/core/services/post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((rv) => {
      this.posts = rv as any[];
    });
  }
}
