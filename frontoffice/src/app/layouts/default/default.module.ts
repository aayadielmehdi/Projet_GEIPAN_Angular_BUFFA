import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'

import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';

import {FormsModule}  from '@angular/forms'


import { DashboardService } from 'src/app/modules/dashboard.service';
import { CasesComponent } from 'src/app/modules/cases/cases.component';
import { MatIconModule } from '@angular/material/icon';
import { CasesService } from 'src/app/modules/cases.service';
import { TemoignagesCasComponent } from 'src/app/modules/temoignages-cas/temoignages-cas.component';





@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CasesComponent,
    TemoignagesCasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CasesService,
    DashboardService
  ]
})
export class DefaultModule { }
