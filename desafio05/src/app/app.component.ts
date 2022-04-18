import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Producto } from './models/producto';
import { DatosService } from './services/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  productos$!: Observable<Producto[]>;
  productosFiltrados$!: Observable<Producto[]>;
  productosSuscripcion!: any;

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.productos$ = this.datosService.obtenerDatosObservable();
    this.productosSuscripcion = this.productos$.subscribe();
    this.productosFiltrados$ = this.datosService.obtenerDatosFiltrados();
  }
  ngOnDestroy(): void {
    this.productosSuscripcion.unsubscribe();
  }
  abrirCursoDialog(curso: any) {}
  eliminarCurso(id: number) {}
}
