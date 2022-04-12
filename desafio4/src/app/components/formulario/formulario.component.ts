import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MatTable } from '@angular/material/table';
import { PeriodicElement } from 'src/app/interfaces/PeriodicElement';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  alumnos: any[] = [];
  formContacto: FormGroup = new FormGroup({
    position: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
    ]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
    ]),
    course: new FormControl('', [Validators.required, Validators.minLength(3)]),
    grade: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  title: string = 'Formulario';

  @ViewChild(MatTable) tabla1!: MatTable<PeriodicElement>;

  ngOnInit(): void {
    this.alumnoService.obtenerObservable().subscribe((alumnos) => {
      this.alumnos = alumnos;
    });
  }

  constructor(private alumnoService: AlumnoService) {}

  addAlumno(alumno: any) {
    this.alumnoService.addAlumno(this.formContacto.value);
    this.alumnoService.obtenerAlumnos();
    this.tabla1?.renderRows();
    console.log('thissss here', this.alumnos);
  }
}
