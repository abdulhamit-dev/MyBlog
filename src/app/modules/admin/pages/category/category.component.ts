import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/categories';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  category:Category=new Category()
  categories:Category[]=[]

  constructor(private categoryService:CategoryService) {  

  }

  ngOnInit(): void {
    
    this.categoryService.getCategories().subscribe(rv=>{
      this.categories=rv as any
    })
  }

  add(){

    this.categoryService.addCategories(this.category)
  }

}
