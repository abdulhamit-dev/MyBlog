import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { FooterBarComponent } from './layout/footer-bar/footer-bar.component';

import { AngularFireModule } from '@angular/fire/compat';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';

import { environment } from 'src/envitonments/environment';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    FooterBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AdminModule,

    AngularFireModule.initializeApp(environment.firebase),
    NzLayoutModule,
    NzButtonModule,
    NzListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
