import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CasesComponent } from './modules/cases/cases.component'
import { TemoignagesCasComponent } from './modules/temoignages-cas/temoignages-cas.component';

const routes: Routes = [{
  path : '',
  component: DefaultComponent,
  children : [{
    path : '',
    component : CasesComponent
  },{
    path : 'dashboard',
    component : DashboardComponent
  },{
    path : 'cas/:id',
    component : TemoignagesCasComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
