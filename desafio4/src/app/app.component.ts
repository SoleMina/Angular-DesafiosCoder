import { Component } from '@angular/core';
import { AlumnoService } from './core/services/alumno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  alumnos: any[] = [];
  title = 'desafio4';

  constructor(private alumnoService: AlumnoService) {
    //this.alumnos = this.alumnoService.obtenerAlumnos();
  }
}
