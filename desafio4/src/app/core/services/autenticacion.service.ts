import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  sesion: any = {
    activa: false,
    usuario: {},
  };
  constructor(private http: HttpClient, private router: Router) {}

  login(correo: string, contrasena: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.apiURL}/users`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter(
          (u) => u.correo === correo && u.contrasena === contrasena
        );
      })
    );
  }
  establecerSesion(sesionActiva: boolean, usuario: Usuario) {
    this.sesion = {
      activa: sesionActiva,
      usuario: usuario,
    };
    localStorage.setItem('sesion', JSON.stringify(this.sesion));
    this.router.navigate(['alumnos']);
  }

  logout() {
    this.sesion = {
      activa: false,
      usuario: {},
    };
    localStorage.removeItem('sesion');
  }
}
