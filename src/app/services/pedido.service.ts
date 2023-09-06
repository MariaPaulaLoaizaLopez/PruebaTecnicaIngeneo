import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private baseUrl = 'https://localhost:7169/api/Pedido';

  constructor(public http: HttpClient) { }

  public getPedidos():Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
