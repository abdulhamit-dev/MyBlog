import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './pages/category/category.component';
import { UserComponent } from './pages/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './pages/post/post.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgzorroModule } from '../ngzorro/ngzorro.module';
import { TruncatePipe } from 'src/app/core/pipes/TruncatePipe';
import { ImageCropperModule } from 'ngx-image-cropper';

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
    PostComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgzorroModule,
    CKEditorModule,
    ImageCropperModule
  ]
})
export class AdminModule { }
