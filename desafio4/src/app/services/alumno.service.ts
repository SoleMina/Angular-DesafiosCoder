import { Injectable, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
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
    },
    {
      position: 2,
      name: 'Soledad',
      age: 18,
      course: 'Angular',
      grade: 20,
      email: 'sol2022@gmail.com',
    },
    {
      position: 3,
      name: 'Sam',
      age: 18,
      course: 'ReactJs',
      grade: 20,
      email: 'sam@gmail.com',
    },
  ];

  constructor() {
    this.alumnoObservable = new Observable((suscripcion) =>
      suscripcion.next(this.alumnos)
    );
    this.alumnoSubject = new Subject();
  }
  @ViewChild(MatTable) tabla1!: MatTable<any>;

  obtenerObservable() {
    console.log(this.alumnoObservable);
    return this.alumnoObservable;
  }
  obtenerAlumnos() {
    return this.alumnos;
  }
  addAlumno(alumno: any) {
    this.alumnos.push(alumno);
    this.alumnos = [...this.alumnos, alumno];
    this.alumnoSubject.next(this.alumnos);
    console.log('SERVICE', this.alumnos);
    return this.alumnos;
  }
  modificarAlumno(alumno: any) {}
}
