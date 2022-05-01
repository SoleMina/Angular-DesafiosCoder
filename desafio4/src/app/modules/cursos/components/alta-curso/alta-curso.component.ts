import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlumnoService } from 'src/app/core/services/alumno.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-curso',
  templateUrl: './alta-curso.component.html',
  styleUrls: ['./alta-curso.component.css'],
})
export class AltaCursoComponent implements OnInit {
  cursos: any[] = [];
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
  title: string = 'Registrar Curso';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private alumnoService: AlumnoService
  ) {
    this.cursos = this.alumnoService.obtenerCursos();
    //this.cursos.alumnoSubject.next(this.cursos);
  }

  ngOnInit(): void {}

  addCurso(curso: any) {
    this.alumnoService.addCurso(this.formCurso.value);
    console.log('thissss here', this.cursos);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Alumno registrado',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
