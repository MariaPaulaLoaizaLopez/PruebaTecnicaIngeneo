import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = 'https://localhost:7169/api/Cliente';

  constructor(public http: HttpClient) { }

  public getClientes():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  public getById(id:number):Observable<any>{
    return this.http.get(this.baseUrl + id);
  }

  public save(cliente: Cliente):Observable<any>{
    return this.http.post(this.baseUrl,cliente);
  }

  public edit(cliente: Cliente):Observable<any>{
    return this.http.put(this.baseUrl + cliente.id,cliente);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete(this.baseUrl + id);
  }
}

