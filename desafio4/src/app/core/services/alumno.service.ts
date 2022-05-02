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
  private readonly API_URL = 'https://626615a7dbee37aff9abdf3f.mockapi.io';
  alumnoSelected: any;
  cursoSelected: any;
  private alumnosObservable: Observable<any>;
  private cursoObservable: Observable<any>;
  alumnoSubject: Subject<any>;
  cursoSubject: Subject<any>;

  private cursos: Array<Curso> = [
    {
      id: 1,
      name: 'Angular',
      description: 'Learn from zero to master',
      category: 'programming',
      capacity: 50,
    },
    {
      id: 2,
      name: 'React',
      description: 'Learn from zero to master',
      category: 'programming',
      capacity: 50,
    },
    {
      id: 3,
      name: 'Vue',
      description: 'Learn from zero to master',
      category: 'programming',
      capacity: 50,
    },
  ];

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

  obtenerObservableCurso(): Observable<Curso[]> {
    return this.cursoObservable;
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

  private manejoError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.warn('Error en el frontend:', error.error.message);
    } else {
      console.warn('Error en el backend', error.status, error.message);
    }

    return throwError(() => 'Error de comunicación HTTP');
  }

  obtenerAlumnos() {
    //return this.alumnos;
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

  obtenerCursos() {
    return this.cursos;
  }
  agregarAlumno(alumno: Alumno) {
    return this.http
      .post<Alumno>(`${this.API_URL}/alumnos/`, alumno)
      .pipe(catchError(this.manejoError));
  }
  eliminarAlumno(position: string) {
    return this.http
      .delete<Alumno>(`${this.API_URL}/alumnos/${position}`)
      .pipe(catchError(this.manejoError));
  }
  updateAlumno(alumno: Alumno) {
    return this.http
      .put(`${this.API_URL}/alumnos/${alumno.position}`, alumno)
      .pipe(catchError(this.manejoError));
  }
  muestraAlumno(alumno: any) {
    alert('El alumno es ' + alumno.name + ' y lleva el curso ' + alumno.course);
  }
  modificarAlumno(alumno: any) {
    /*
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].position == alumno.position) {
        this.alumnos[i].name = alumno.name + ' Modificado';
      }
    }
    return this.alumnos;
    */
  }
  addCurso(curso: any) {
    let number = this.cursos.length;
    let result = {
      id: number + 1,
      name: curso.name,
      description: curso.description,
      category: curso.category,
      capacity: curso.capacity,
    };
    this.cursos.push(result);
    return this.cursos;
  }
  eliminarCurso(id: number) {
    for (let i = 0; i < this.cursos.length; i++) {
      if (this.cursos[i].id == id) {
        this.cursos.splice(i, 1);
      }
    }
    return this.cursos;
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

  updateCurso(curso: Curso) {
    for (let i = 0; i < this.cursos.length; i++) {
      if (this.cursos[i].id == curso.id) {
        this.cursos[i] = curso;
      }
    }
    return this.cursos;
  }
}
