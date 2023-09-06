import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlmacenamientoService {

  private baseUrl = 'https://localhost:7169/api/Almacenamiento';

  constructor(public http: HttpClient) { }

  public getAlmacenamientos():Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
