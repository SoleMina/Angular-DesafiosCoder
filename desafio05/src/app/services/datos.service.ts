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

  productos: any[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 4500,
      description: 'This product has a high quality',
    },
    {
      id: 2,
      name: 'Ipad',
      price: 3200,
      description: 'This product has a high quality',
    },
    {
      id: 3,
      name: 'Iphone',
      price: 3800,
      description: 'This product has a high quality',
    },
  ];

  constructor(private http: HttpClient) {
    //Promise
    this.productosPromise = new Promise((resolve, reject) => {
      if (this.productos.length > 0) {
        resolve(this.productos);
      } else {
        reject(this.productos);
      }
    });
  }

  obtenerCursosPromise() {
    return this.productosPromise;
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

  //Eliminar producto from promises
  eliminarProductos(id: number) {
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[0].id == id) {
        this.productos.splice(i, 1);
      }
    }
    console.log('Eliminar', this.productos);
    return this.productos;
  }
}
