import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PrimeModule } from '../shared/prime/prime.module';
import { ReportsComponent } from './components/list/reports.component';
import { RequestComponent } from './components/request/request.component';
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
  declarations: [ReportsComponent, RequestComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    PrimeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: MessageService }
  ]
})
export class ReportsModule { }
