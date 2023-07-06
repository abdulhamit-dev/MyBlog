import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    NzLayoutModule,
    NzButtonModule,
    NzListModule,
    NzGridModule,
    NzInputModule,
    NzFormModule,
    NzCardModule,
    NzSwitchModule,
    NzTableModule,
    NzDividerModule
  ]
})
export class NgzorroModule { }
