import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { AlmacenamientosListComponent } from './almacenamientos/almacenamientos-list/almacenamientos-list.component';
import { MediosDeTransporteListComponent } from './mediosDeTransporte/medios-de-transporte-list/medios-de-transporte-list.component';
import { PedidosListComponent } from './pedidos/pedidos-list/pedidos-list.component';
import { PlanDeEntregaListComponent } from './planDeEntrega/plan-de-entrega-list/plan-de-entrega-list.component';
import { ProductosListComponent } from './productos/productos-list/productos-list.component';

const routes: Routes = [
  {path: 'clientes-list', component: ClientesListComponent },
  {path: 'almacenamientos-list', component: AlmacenamientosListComponent },
  {path: 'transporte-list', component: MediosDeTransporteListComponent },
  {path: 'pedidos-list', component: PedidosListComponent },
  {path: 'plan-entrega-list', component: PlanDeEntregaListComponent },
  {path: 'productos-list', component: ProductosListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
