import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherRequestCityDto } from '../../dtos/report.interface';
import { ReportsService } from '../../reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit, OnDestroy {
  listado: WeatherRequestCityDto[] = [];
  first!: WeatherRequestCityDto;
  requestedSubscription: Subscription = new Subscription();

  constructor(
    private reportService: ReportsService
  ) { }

  ngOnInit(): void {
    this.requestedSubscription = this.reportService.getWeatherResponseObservable()
      .subscribe((response: WeatherRequestCityDto[]) => {
        if (response.length > 0) {
          this.first = response[0];
          this.listado = response.slice(1);
        }
      });
  }

  ngOnDestroy() {
    this.requestedSubscription.unsubscribe();
  }
}
