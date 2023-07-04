import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/core/models/posts";
import { PostService } from "src/app/core/services/post.service";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AnyCatcher } from "rxjs/internal/AnyCatcher";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  post: Post = new Post();
  posts: Post[] = [];

  public Editor = ClassicEditor;
  editorContent: string = "";

  selectedFile: File | null = null;
  dURL: string | null = null;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((rv) => {
      this.posts = rv.map((post: any) => {
        return { id: post.key, ...post.payload.val() };
      });
     
    });

    
  }

  add() {
    console.log(this.post.content);
    this.post.imageUrl=this.dURL==null?"":this.dURL;
    this.postService.addPost(this.post);
  }

  save() {
    console.log(this.editorContent);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload(event: any) {
    const file = event.target.files[0];
    const fileSize = file.size;

    if (fileSize > 200 * 1024) {
      console.error("Dosya boyutu 200 KB'dan büyük olamaz.");
      return;
    }

    this.postService.uploadImage(event).subscribe(
      (downUrl) => {
        this.dURL=downUrl
      }
    );
  }

  delete(post:Post){
    post.isActive=false;
    this.postService.updatePost(post).then(()=>{
      alert("Kayıt silindi")
    })
  }
}
