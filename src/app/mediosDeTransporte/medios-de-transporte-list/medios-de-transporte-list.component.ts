import { Component, OnInit } from '@angular/core';
import { MedioDeTransporte } from 'src/app/models/medioTransporte';
import { TransporteService } from 'src/app/services/transporte.service';

@Component({
  selector: 'app-medios-de-transporte-list',
  templateUrl: './medios-de-transporte-list.component.html',
  styleUrls: ['./medios-de-transporte-list.component.css']
})
export class MediosDeTransporteListComponent implements OnInit {

  public mediosDeTransporte: MedioDeTransporte[] = [];

  constructor(public transporteService: TransporteService) { }

  ngOnInit(): void {
    this.transporteService.getMediosDeTransporte().subscribe(data =>{
      this.mediosDeTransporte = data;
    })
  }

}
