import { Component, OnInit } from '@angular/core';
import { Almacenamiento } from 'src/app/models/almacenamiento';
import { AlmacenamientoService } from 'src/app/services/almacenamiento.service';

@Component({
  selector: 'app-almacenamientos-list',
  templateUrl: './almacenamientos-list.component.html',
  styleUrls: ['./almacenamientos-list.component.css']
})
export class AlmacenamientosListComponent implements OnInit {

  public almacenamientos:Almacenamiento[] = [];

  constructor(public almacenamientoService: AlmacenamientoService) { }

  ngOnInit(): void {
    this.almacenamientoService.getAlmacenamientos().subscribe(data => {
      this.almacenamientos = data;
    })
  }

}
