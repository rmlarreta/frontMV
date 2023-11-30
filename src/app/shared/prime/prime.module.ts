import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar'; 
import {  DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox'; 

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    ToolbarModule,
    CardModule,
    TableModule,
    DropdownModule,    
    CheckboxModule
  ]
})
export class PrimeModule { }
