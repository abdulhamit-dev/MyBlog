import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Category } from '../models/categories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  
  getCategories(){
   return this.db.list('category').valueChanges()
  }

  addCategories(category:Category){
   return this.db.list('category').push(category)
  }
}
