import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {

  public pedidos: Pedido[] = [];

  constructor(public pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe(data => {
      this.pedidos = data;
    })
  }

}
