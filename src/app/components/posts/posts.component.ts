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
    this.postService.posts().subscribe((rv) => {
      this.posts = rv.map((post: any) => {
        return { id: post.key, ...post.payload.val() };
      });
    });
  }
}
