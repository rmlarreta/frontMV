import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { map, tap } from 'rxjs';
import { CiudadDto } from '../../dtos/ciudad.interface';
import { WeatherRequestCityDto } from '../../dtos/report.interface';
import { GetWeatherRequest } from '../../dtos/request.interface';
import { ReportsService } from '../../reports.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent implements OnInit {
  cities: CiudadDto[] = [];
  editForm!: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private reportService: ReportsService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      ciudad: [null, Validators.required],
      historial: [false],
    });

    this.getAllCities();
  }

  get f() {
    return this.editForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.editForm.invalid) {
      this.submitted = false;
      return;
    }

    const formValues = this.editForm.value;
    const request: GetWeatherRequest = {
      ciudad: {
        id: this.cities.find(i => i.id === this.editForm.get('ciudad')?.value)?.id || '',
        pais: this.cities.find(i => i.id === this.editForm.get('ciudad')?.value)?.pais || '',
        nombre: this.cities.find(i => i.id === this.editForm.get('ciudad')?.value)?.nombre || '',
        idDouble: this.cities.find(i => i.id === this.editForm.get('ciudad')?.value)?.idDouble || 0
      },
      historial: formValues.historial
    }

    this.reportService.requestWeather(request)
      .pipe(
        tap((response: WeatherRequestCityDto[]) => {
          if (!response || response.length === 0)
            this.messageService.add({ severity: 'warn', summary: 'Aviso', detail: "Sin Datos" });
        }))
  };

  getAllCities(): void {
    this.reportService.getAllCities()
      .pipe(
        tap((response: CiudadDto[]) => {
          if (!response || response.length === 0)
            this.messageService.add({ severity: 'warn', summary: 'Aviso', detail: "Sin Datos" });
        }),
        map((response: CiudadDto[]) => response || [])
      )
      .subscribe({
        next: (cities: CiudadDto[]) => {
          this.cities = cities;
        },
        error: (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
        }
      });
  }
}
