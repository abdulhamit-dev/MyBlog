import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Category } from '../models/categories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  
  categories(){
   return this.db.list("category", ref => ref.orderByChild('isActive').equalTo(true)).snapshotChanges();
  }

  adminCategories(){
    return this.db.list('category').snapshotChanges()
   }
  add(category:Category){
   return this.db.list('category').push(category)
  }

  update(updatedCategory: Category) {
    return this.db.list("category").update(updatedCategory.id, updatedCategory);
  }

  delete(key: string) {
    return this.db.list("category").remove(key);
  }
}
