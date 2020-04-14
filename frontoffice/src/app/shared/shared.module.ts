import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule} from '@angular/material/menu'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { PieComponent } from './widgets/pie/pie.component'

@NgModule({
  declarations: [
    HeaderComponent, FooterComponent , SidebarComponent, AreaComponent, PieComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule
  ],
  exports : [ // afin de les utiliser dans une autre module
    HeaderComponent, FooterComponent , SidebarComponent , AreaComponent , PieComponent
  ]
})
export class SharedModule { }
