import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  private baseUrl = 'https://localhost:7169/api/MedioDeTransporte';

  constructor(public http: HttpClient) { }

  public getMediosDeTransporte():Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
