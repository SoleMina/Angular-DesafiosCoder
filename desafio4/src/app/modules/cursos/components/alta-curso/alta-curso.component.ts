import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-curso',
  templateUrl: './alta-curso.component.html',
  styleUrls: ['./alta-curso.component.css'],
})
export class AltaCursoComponent implements OnInit {
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
  title: string = 'Formulario';

  constructor() {}

  ngOnInit(): void {}

  addAlumno(curso: any) {}
}
