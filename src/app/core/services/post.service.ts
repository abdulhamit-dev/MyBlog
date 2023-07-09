import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Post } from "../models/posts";
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from "@angular/fire/compat/storage";
import { Observable, finalize, map, of, switchMap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostService {
  percentage?: Observable<number>;

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {}

  posts() {
     return this.db.list("post", ref => ref.orderByChild('isActive').equalTo(true)).snapshotChanges();
  }

  adminPosts(){
    return this.db.list("post").snapshotChanges();
  }

  addPost(post: Post) {
    console.log(post)
    return this.db.list("post").push(post);
  }

  uploadFile(file: File): Observable<string> {

    const randomDigits = Math.floor(Math.random() * 9000) + 1000; 
    const filePath = `resim/yuklenen/dizin/${randomDigits}_${file.name}`;
  
    return new Observable<string>((observer) => {
      const storageRef = this.storage.ref(filePath);
      const task = storageRef.put(file, { contentType: file.type });
  
      task.snapshotChanges().pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(
            (downloadURL) => {
              observer.next(downloadURL);
              observer.complete();
            },
            (error) => {
              observer.error(error);
            }
          );
        })
      ).subscribe();
    });
  }

  updatePost(updatedPost: Post) {
    return this.db.list("post").update(updatedPost.id, updatedPost);
  }

  deletePost(key: string) {
    return this.db.list("post").remove(key);
  }
}
