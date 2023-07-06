import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "src/app/core/models/categories";
import { CategoryService } from "src/app/core/services/category.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  category: Category = new Category();
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadData();
  }

  save(){

    console.log(this.category)
    
    if(this.category.id==""){
      this.categoryService.add(this.category)
    }else{
      this.categoryService.update(this.category)
    }
  }

  loadData() {
    this.categoryService.adminCategories().subscribe((rv) => {
      this.categories = rv.map((category: any) => {
        return { id: category.key, ...category.payload.val() };
      });
    });
  }

  edit(category:Category){
    console.log(category)
    this.category=category
  }
}
