import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/core/models/categories";
import { CategoryService } from "src/app/core/services/category.service";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"],
})
export class SideBarComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.categories().subscribe((rv) => {
      this.categories = rv.map((category: any) => {
        return { ...category.payload.val() };
      });
    });
  }
}
