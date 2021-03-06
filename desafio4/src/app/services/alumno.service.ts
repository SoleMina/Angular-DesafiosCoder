import { Injectable, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { PeriodicElement } from '../interfaces/PeriodicElement';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  alumnoSelected: any;
  private alumnoObservable: Observable<any>;
  alumnoSubject: Subject<any>;
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

  constructor() {
    this.alumnoObservable = new Observable((suscripcion) =>
      suscripcion.next(this.alumnos)
    );
    this.alumnoSubject = new Subject();
    this.alumnoSubject.next(this.alumnos);
  }

  obtenerObservable() {
    return this.alumnoObservable;
  }

  obtenerObservableDos(): Observable<Alumno[]> {
    return this.alumnoObservable;
  }

  obtenerAlumnos() {
    return this.alumnos;
  }
  addAlumno(alumno: any) {
    this.alumnos.push(alumno);
    return this.alumnos;
  }
  eliminarAlumno(position: number) {
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].position == position) {
        this.alumnos.splice(i, 1);
      }
    }
    this.alumnoSubject.next(this.alumnos);
    return this.alumnos;
  }
  modificarAlumno(alumno: any) {
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].position == alumno.position) {
        this.alumnos[i].name = alumno.name + ' Modificado';
      }
    }
    this.alumnoSubject.next(this.alumnos);
    return this.alumnos;
  }
  muestraAlumno(alumno: any) {
    this.alumnoSubject.next(this.alumnos);
    alert('El alumno es ' + alumno.name + ' y lleva el curso ' + alumno.course);
  }
  updateAlumno(alumno: Alumno) {
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].position == alumno.position) {
        this.alumnos[i] = alumno;
      }
    }
    this.alumnoSubject.next(this.alumnos);
    return this.alumnos;
  }
}
