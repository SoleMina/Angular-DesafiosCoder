import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoService } from './core/services/alumno.service';
import { AutenticacionService } from './core/services/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sesionActiva!: any;

  constructor(
    private alumnoService: AlumnoService,
    private auth: AutenticacionService,
    private router: Router
  ) {
    this.sesionActiva = JSON.parse(localStorage.getItem('sesion') || '{}');
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['autenticacion', 'login']);
  }
}
