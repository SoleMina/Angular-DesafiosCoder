import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { Observable, Subject, catchError, filter, throwError } from 'rxjs';
import { PeriodicElement } from '../../interfaces/PeriodicElement';
import { Alumno } from '../../interfaces/alumno';
import { Curso } from 'src/app/interfaces/curso';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private readonly API_URL = 'https://626615a7dbee37aff9abdf3f.mockapi.io';

  alumnoSelected: any;
  cursoSelected: any;
  private alumnoObservable: Observable<any>;
  private cursoObservable: Observable<any>;
  alumnoSubject: Subject<any>;
  cursoSubject: Subject<any>;
  private alumnos: Array<Alumno> = [
    {
      position: 1,
      name: 'Karina',
      age: 21,
      course: 'Angular',
      grade: 20,
      email: 'karina@gmail.com',
    },
    {
      position: 2,
      name: 'Soledad',
      age: 18,
      course: 'Angular',
      grade: 15,
      email: 'sol2022@gmail.com',
    },
    {
      position: 3,
      name: 'Sam',
      age: 19,
      course: 'ReactJs',
      grade: 14,
      email: 'sam@gmail.com',
    },
  ];
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
    //Alumnos
    this.alumnoObservable = new Observable((suscripcion) =>
      suscripcion.next(this.alumnos)
    );
    this.alumnoSubject = new Subject();
    this.alumnoSubject.next(this.alumnos);

    //Cursos
    this.cursoObservable = new Observable((suscripcion) =>
      suscripcion.next(this.cursos)
    );
    this.cursoSubject = new Subject();
    this.cursoSubject.next(this.cursos);
  }

  /*obtenerObservable() {
    return this.alumnoObservable;
  }
  */

  obtenerObservable(): Observable<Alumno[]> {
    return this.alumnoObservable;
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
    return this.alumnos;
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
  addAlumno(alumno: any) {
    let number = this.alumnos.length;
    let result = {
      position: number + 1,
      name: alumno.name,
      age: alumno.age,
      course: alumno.course,
      grade: alumno.grade,
      email: alumno.email,
    };
    this.alumnos.push(result);
    return this.alumnos;
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
  eliminarAlumno(position: number) {
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].position == position) {
        this.alumnos.splice(i, 1);
      }
    }
    return this.alumnos;
  }
  eliminarCurso(id: number) {
    for (let i = 0; i < this.cursos.length; i++) {
      if (this.cursos[i].id == id) {
        this.cursos.splice(i, 1);
      }
    }
    return this.cursos;
  }
  modificarAlumno(alumno: any) {
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].position == alumno.position) {
        this.alumnos[i].name = alumno.name + ' Modificado';
      }
    }
    return this.alumnos;
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
  updateAlumno(alumno: Alumno) {
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].position == alumno.position) {
        this.alumnos[i] = alumno;
      }
    }
    return this.alumnos;
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
