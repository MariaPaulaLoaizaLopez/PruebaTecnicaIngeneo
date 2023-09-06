import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  public cliente: Cliente = new Cliente(0,0,'','','');

  constructor(public clienteService: ClienteService, private router:Router) {
   }

  ngOnInit(): void {
  }

  public save(){
    this.clienteService.save(this.cliente).subscribe(data => {
      this.router.navigate(['/clientes-list']);
    }, error => {
      console.log(error);
    });
  }

}
