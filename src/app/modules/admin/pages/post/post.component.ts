import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Post } from "src/app/core/models/posts";
import { PostService } from "src/app/core/services/post.service";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Category } from "src/app/core/models/categories";
import { CategoryService } from "src/app/core/services/category.service";
import {
  ImageCroppedEvent,
  LoadedImage,
  base64ToFile,
} from "ngx-image-cropper";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  post: Post = new Post();
  posts: Post[] = [];

  category: Category = new Category();
  categories: Category[] = [];

  public Editor = ClassicEditor;
  editorContent: string = "";

  selectedFile: File | null = null;
  dURL: string | null = null;
  file: any;
  @ViewChild('fileInputRef') fileInputRef!: ElementRef<HTMLInputElement>;

  imageChangedEvent: any = "";
  croppedImage: any = "";
  showCropper = false;

  constructor(
    private postService: PostService,
    private categoryService: CategoryService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.loadData();
  }

  save() {
    
    
    if (this.post.id == "") {

      this.postService.uploadFile(this.file).subscribe((downUrl) => {
        this.dURL = downUrl;
        this.post.imageUrl = this.dURL == null ? "" : this.dURL;
        this.post.categoryId = this.category.id;
        console.log(this.post)
        this.postService.addPost(this.post);  
      });


    } else {

      
      this.postService.updatePost(this.post).then(() => {});
    }

    
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (this.file.size > 300 * 1024) {
      console.error("Dosya boyutu 200 KB'dan büyük olamaz.");
      return;
    }
  }

  edit(post: Post) {
    this.post = post;
    var selectCategory = this.categories.find(
      (x) => x.id == this.post.categoryId
    );
    console.log(post);
    if (selectCategory != null) {
      this.category = selectCategory;
    } else {
      this.category = new Category();
    }
  }

  clear() {
    this.post = new Post();
    this.showCropper = false;
    this.file=null
    this.fileInputRef.nativeElement.value ='';
  }

  loadData() {
    this.postService.adminPosts().subscribe((rv) => {
      this.posts = rv.map((post: any) => {
        return { id: post.key, ...post.payload.val() };
      });
    });

    this.categoryService.adminCategories().subscribe((rv) => {
      this.categories = rv.map((category: any) => {
        return { id: category.key, ...category.payload.val() };
      });
    });
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    if (event.blob != null && event.objectUrl != null) {
      this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(
        event.objectUrl
      );
      let fileName = this.imageChangedEvent.target.files[0].name;
      this.file = new File([event.blob], fileName);
    }
  }

  imageLoaded(evnt: any) {
    this.showCropper = true;
  }
}
