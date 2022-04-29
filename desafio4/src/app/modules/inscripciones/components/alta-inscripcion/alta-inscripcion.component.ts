import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-inscripcion',
  templateUrl: './alta-inscripcion.component.html',
  styleUrls: ['./alta-inscripcion.component.css'],
})
export class AltaInscripcionComponent implements OnInit {
  alumnos: any[] = [];
  formCurso: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    category: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    capacity: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
    ]),
  });
  title: string = 'Registrar Inscripción';

  constructor() {}

  ngOnInit(): void {}
  addAlumno(alumno: any) {}
}
