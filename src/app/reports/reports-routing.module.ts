import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './components/list/reports.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: ReportsComponent }, 
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
