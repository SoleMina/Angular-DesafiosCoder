import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/interfaces/alumno';
import { MatTable } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit, OnDestroy {
  alumnos: Alumno[] = [];
  formContacto: FormGroup = new FormGroup({
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

  private alumnoSubscription!: Subscription;

  @ViewChild(MatTable) tabla1!: MatTable<Alumno>;

  constructor(private alumnoService: AlumnoService, private router: Router) {}

  ngOnInit(): void {
    this.alumnoService.obtenerAlumno().subscribe((alumnos) => {
      this.alumnos = alumnos;
    });
  }

  ngAfterViewInit() {}

  ngOnDestroy(): void {
    //this.alumnoSubscription.unsubscribe();
  }

  addAlumno() {
    this.alumnoService
      .agregarAlumno(this.formContacto.value)
      .subscribe((data) => {
        console.log('FUAAA', data);
        console.log('OH', this.alumnos);
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
    this.router.navigate(['alumnos']);
  }
}
