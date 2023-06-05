import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './pages/category/category.component';
import { UserComponent } from './pages/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'post',
    component: PostComponent
  }
];

@NgModule({
  declarations: [
    CategoryComponent,
    UserComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule

  ]
})
export class AdminModule { }
