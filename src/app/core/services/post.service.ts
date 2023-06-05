import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Post } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private db:AngularFireDatabase) { }

  getPosts(){
    return this.db.list('post').valueChanges()
  }

  addPost(post:Post){
    return this.db.list('post').push(post)
  }
}
