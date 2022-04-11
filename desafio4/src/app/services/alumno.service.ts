import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PeriodicElement } from '../interfaces/PeriodicElement';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private alumnoObservable: Observable<any>;
  private alumnoSubject: Subject<any>;
  private alumnos: Array<PeriodicElement> = [
    {
      position: 1,
      name: 'Karina',
      age: 21,
      course: 'Angular',
      grade: 20,
      email: 'karina@gmail.com',
      symbol: 'He',
    },
    {
      position: 2,
      name: 'Soledad',
      age: 18,
      course: 'Angular',
      grade: 20,
      email: 'sol2022@gmail.com',
      symbol: 'He',
    },
    {
      position: 3,
      name: 'Sam',
      age: 18,
      course: 'ReactJs',
      grade: 20,
      email: 'sam@gmail.com',
      symbol: 'He',
    },
    {
      position: 4,
      name: 'Estella',
      age: 23,
      course: 'Angular',
      grade: 20,
      email: 'ester@gmail.com',
      symbol: 'He',
    },
    {
      position: 5,
      name: 'Carlos',
      age: 19,
      course: 'ReactJs',
      grade: 20,
      email: 'Carlos@gmail.com',
      symbol: 'He',
    },
    {
      position: 6,
      name: 'Juan',
      age: 28,
      course: 'Angular',
      grade: 20,
      email: 'juan2022@gmail.com',
      symbol: 'He',
    },
  ];

  constructor() {
    this.alumnoObservable = new Observable((suscripcion) =>
      suscripcion.next(this.alumnos)
    );
    this.alumnoSubject = new Subject();
  }

  obtenerObservable() {
    console.log(this.alumnoObservable);
    return this.alumnoObservable;
  }
  modificarAlumno(alumno: any) {}
}
