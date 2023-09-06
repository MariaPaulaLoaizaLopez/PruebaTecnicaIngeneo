import { Component, OnInit } from '@angular/core';
import { PlanDeEntrega } from 'src/app/models/plan-de-entrega';
import { PlanDeEntregaService } from 'src/app/services/plan-de-entrega.service';

@Component({
  selector: 'app-plan-de-entrega-list',
  templateUrl: './plan-de-entrega-list.component.html',
  styleUrls: ['./plan-de-entrega-list.component.css']
})
export class PlanDeEntregaListComponent implements OnInit {

  public planesDeEntrega:PlanDeEntrega[] = [];

  constructor(public planDeEntregaService: PlanDeEntregaService) { }

  ngOnInit(): void {
    this.planDeEntregaService.getPlanesDeEntrega().subscribe(data =>{
      this.planesDeEntrega = data;
    })
  }

}
