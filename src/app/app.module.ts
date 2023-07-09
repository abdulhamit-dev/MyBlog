import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { FooterBarComponent } from './layout/footer-bar/footer-bar.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


import { environment } from 'src/envitonments/environment';
import { AdminModule } from './modules/admin/admin.module';
import { NgzorroModule } from './modules/ngzorro/ngzorro.module';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { TruncatePipe } from './core/pipes/TruncatePipe';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    FooterBarComponent,
    PostDetailComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    NgzorroModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
