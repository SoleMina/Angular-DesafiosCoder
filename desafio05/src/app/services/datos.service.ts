import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { filter, from, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  datos$!: Observable<Producto[]>;
  productosPromise!: Promise<any>;

  cursos: Array<any> = [
    { id: 1, nombre: 'Angular', camada: 202201 },
    { id: 2, nombre: 'Reactjs', camada: 202202 },
    { id: 3, nombre: 'Vue', camada: 202203 },
  ];

  constructor(private http: HttpClient) {
    //Promise
    this.productosPromise = new Promise((resolve, reject) => {
      if (this.cursos.length > 0) {
        resolve(this.productosPromise);
      } else {
        reject(this.cursos);
      }
    });
  }

  obtenerDatosObservable(): Observable<Producto[]> {
    this.datos$ = this.http.get<Producto[]>(
      'https://fakestoreapi.com/products'
    );
    return this.datos$;
  }

  obtenerDatosFiltrados(): Observable<Producto[]> {
    return this.datos$.pipe(
      map((datos) =>
        datos.filter((producto: any) => producto.category == 'jewelery')
      )
    );
  }
}
