import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  constructor(private http: HttpClient) {}

  obtenerDatosObservable(): Observable<any> {
    let result = this.http.get('https://fakestoreapi.com/products');
    return result;
  }
}
