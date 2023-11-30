import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { PrimeModule } from './shared/prime/prime.module';
import { ReportsModule } from './reports/reports.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    PrimeModule, 
    HttpClientModule, 
    ReportsModule  
  ],
  providers: [
    
    { provide: MessageService } 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
