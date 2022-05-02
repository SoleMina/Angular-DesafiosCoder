import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { Observable, Subject, catchError, filter, throwError } from 'rxjs';
import { Alumno } from '../../interfaces/alumno';
import { Curso } from 'src/app/interfaces/curso';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  alumnos: Alumno[] = [];
  cursos: Curso[] = [];

  private readonly API_URL = 'https://626615a7dbee37aff9abdf3f.mockapi.io';
  alumnoSelected: any;
  cursoSelected: any;
  private alumnosObservable: Observable<any>;
  private cursoObservable: Observable<any>;
  alumnoSubject: Subject<any>;
  cursoSubject: Subject<any>;

  constructor(private http: HttpClient) {
    this.alumnosObservable = new Observable((suscripcion) =>
      suscripcion.next(this.obtenerAlumno())
    );
    this.alumnoSubject = new Subject();

    //Cursos
    this.cursoObservable = new Observable((suscripcion) =>
      suscripcion.next(this.cursos)
    );
    this.cursoSubject = new Subject();
    this.cursoSubject.next(this.cursos);
  }

  private manejoError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.warn('Error en el frontend:', error.error.message);
    } else {
      console.warn('Error en el backend', error.status, error.message);
    }

    return throwError(() => 'Error de comunicación HTTP');
  }

  obtenerAlumno(): Observable<Alumno[]> {
    return this.http
      .get<Alumno[]>(`${this.API_URL}/alumnos`, {
        headers: new HttpHeaders({
          'content-type': 'application/json',
        }),
      })
      .pipe(catchError(this.manejoError));
  }

  obtenerCurso(): Observable<Curso[]> {
    return this.http
      .get<Curso[]>(`${this.API_URL}/cursos`, {
        headers: new HttpHeaders({
          'content-type': 'application/json',
        }),
      })
      .pipe(catchError(this.manejoError));
  }

  agregarAlumno(alumno: Alumno) {
    return this.http
      .post<Alumno>(`${this.API_URL}/alumnos/`, alumno)
      .pipe(catchError(this.manejoError));
  }
  addCurso(curso: any) {
    return this.http
      .post<Alumno>(`${this.API_URL}/cursos/`, curso)
      .pipe(catchError(this.manejoError));
  }

  eliminarAlumno(position: string) {
    return this.http
      .delete<Alumno>(`${this.API_URL}/alumnos/${position}`)
      .pipe(catchError(this.manejoError));
  }
  eliminarCurso(id: number) {
    return this.http
      .delete<Alumno>(`${this.API_URL}/cursos/${id}`)
      .pipe(catchError(this.manejoError));
  }
  updateAlumno(alumno: Alumno) {
    return this.http
      .put(`${this.API_URL}/alumnos/${alumno.position}`, alumno)
      .pipe(catchError(this.manejoError));
  }
  updateCurso(curso: Curso) {
    return this.http
      .put(`${this.API_URL}/alumnos/${curso.id}`, curso)
      .pipe(catchError(this.manejoError));
  }
  muestraAlumno(alumno: any) {
    alert('El alumno es ' + alumno.name + ' y lleva el curso ' + alumno.course);
  }

  muestraCurso(curso: any) {
    alert(
      'El curso es ' +
        curso.name +
        ' y tiene uan capacidad de ' +
        curso.capacity +
        ' estudiantes'
    );
  }
}
