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

  uploadImage(event: any):Observable<string > {
    const file = event.target.files[0];
    const filePath = "resim/yuklenen/dizin/" + file.name;
    const storageRef = this.storage.ref(filePath);
    const task: AngularFireUploadTask = storageRef.put(file);
    let downloadURL: string; // downloadURL değişkenini tanımlayın
  
    return task.snapshotChanges().pipe(
      switchMap(() => {
        return storageRef.getDownloadURL(); // downloadURL observable'ını döndürün
      })
    );
  }

  updatePost(updatedPost: Post) {
    console.log(updatedPost)
    return this.db.list("post").update(updatedPost.id, updatedPost);
  }

  deletePost(key: string) {
    return this.db.list("post").remove(key);
  }
}
