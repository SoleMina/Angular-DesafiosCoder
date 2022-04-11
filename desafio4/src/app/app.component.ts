import { Component } from '@angular/core';
import { AlumnoService } from './services/alumno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  alumnos: any[] = [];
  title = 'desafio4';

  constructor(
    private alumnoService: AlumnoService // Una instancia de CursoBetaService
  ) {
    this.alumnos = this.alumnoService.obtenerAlumnos();
  }
}
