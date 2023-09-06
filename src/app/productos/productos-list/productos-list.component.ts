import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  public productos:Producto[] = [];

  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getPedidos().subscribe(data => {
      this.productos = data;
    })
  }

}
