import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { Curso } from 'src/app/interfaces/curso';

@Component({
  selector: 'app-alta-curso',
  templateUrl: './alta-curso.component.html',
  styleUrls: ['./alta-curso.component.css'],
})
export class AltaCursoComponent implements OnInit {
  cursos: Curso[] = [];
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
  loading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private alumnoService: AlumnoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.alumnoService.obtenerCurso().subscribe((cursos) => {
      this.cursos = cursos;
    });

    if (this.data) {
      this.formCurso.setValue({
        name: this.data.name,
        description: this.data.description,
        category: this.data.category,
        capacity: this.data.capacity,
      });
    }
  }

  addCurso(curso: any) {
    this.formCurso.reset();
    this.alumnoService.addCurso(this.formCurso.value).subscribe((data) => {
      console.log('FUAAA', data);
      console.log('OH', this.cursos);
      /*
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Alumno registrado',
          showConfirmButton: false,
          timer: 1500,
        });
        */
    });
    //console.log(this.alumnos);
    this.router.navigate(['cursos']);
  }
  updateCurso() {
    let curso: Curso = {
      id: this.data.id,
      name: this.formCurso.value.name,
      description: this.formCurso.value.description,
      category: this.formCurso.value.category,
      capacity: this.formCurso.value.capacity,
    };
    this.alumnoService.updateCurso(curso).subscribe(console.log);
  }
  resetForm() {
    this.formCurso.reset();
  }
}
