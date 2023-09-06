import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Observable, Subscription } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  public clientes: Cliente[] = [];

  constructor(public clienteService: ClienteService ) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(data =>{
      this.clientes = data;
    })
  }

}
