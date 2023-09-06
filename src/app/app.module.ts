import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';
import { AlmacenamientosListComponent } from './almacenamientos/almacenamientos-list/almacenamientos-list.component';
import { AlmacenamientosFormComponent } from './almacenamientos/almacenamientos-form/almacenamientos-form.component';
import { MediosDeTransporteListComponent } from './mediosDeTransporte/medios-de-transporte-list/medios-de-transporte-list.component';
import { MediosDeTransporteFormComponent } from './mediosDeTransporte/medios-de-transporte-form/medios-de-transporte-form.component';
import { ProductosListComponent } from './productos/productos-list/productos-list.component';
import { ProductosFormComponent } from './productos/productos-form/productos-form.component';
import { PedidosListComponent } from './pedidos/pedidos-list/pedidos-list.component';
import { PedidosFormComponent } from './pedidos/pedidos-form/pedidos-form.component';
import { PlanDeEntregaListComponent } from './planDeEntrega/plan-de-entrega-list/plan-de-entrega-list.component';
import { PlanDeEntregaFormComponent } from './planDeEntrega/plan-de-entrega-form/plan-de-entrega-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './services/cliente.service';
import { AlmacenamientoService } from './services/almacenamiento.service';
import { TransporteService } from './services/transporte.service';
import { PedidoService } from './services/pedido.service';
import { PlanDeEntregaService } from './services/plan-de-entrega.service';
import { ProductoService } from './services/producto.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientesListComponent,
    ClientesFormComponent,
    AlmacenamientosListComponent,
    AlmacenamientosFormComponent,
    MediosDeTransporteListComponent,
    MediosDeTransporteFormComponent,
    ProductosListComponent,
    ProductosFormComponent,
    PedidosListComponent,
    PedidosFormComponent,
    PlanDeEntregaListComponent,
    PlanDeEntregaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ClienteService, 
  AlmacenamientoService, 
  TransporteService,
  PedidoService,
  PlanDeEntregaService,
  ProductoService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
