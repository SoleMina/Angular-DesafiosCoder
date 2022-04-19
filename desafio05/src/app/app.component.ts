import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Producto } from './models/producto';
import { DatosService } from './services/datos.service';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  productos: any[] = [];
  productosPromise!: Promise<any>;
  productos$!: Observable<Producto[]>;
  productosFiltrados$!: Observable<Producto[]>;
  productosSuscripcion!: any;

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.productos$ = this.datosService.obtenerDatosObservable();
    this.productosSuscripcion = this.productos$.subscribe();
    this.productosFiltrados$ = this.datosService.obtenerDatosFiltrados();

    this.productosPromise = this.datosService.obtenerCursosPromise();
    this.productosPromise
      .then((productos) => {
        console.log('Obtuve los datos');
        this.productos = productos;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('end');
      });
  }
  ngOnDestroy(): void {
    this.productosSuscripcion.unsubscribe();
  }
  abrirProductoDialog(curso: any) {}
  eliminarProducto(id: number) {
    this.datosService.eliminarProductos(id);
  }
}
