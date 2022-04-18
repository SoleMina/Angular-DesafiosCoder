import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { DatosService } from './services/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  productos$!: Observable<any>;
  productosSuscripcion!: any;

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.productos$ = this.datosService.obtenerDatosObservable();
    this.productosSuscripcion = this.productos$.subscribe();
  }
  ngOnDestroy(): void {
    this.productosSuscripcion.unsubscribe();
  }
  abrirCursoDialog(curso: any) {}
  eliminarCurso(id: number) {}
}
