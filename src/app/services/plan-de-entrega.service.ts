import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanDeEntregaService {

  private baseUrl = 'https://localhost:7169/api/PlanDeEntrega';

  constructor(public http: HttpClient) { }

  public getPlanesDeEntrega():Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
