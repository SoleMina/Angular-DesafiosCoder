import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit, OnDestroy {
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

  private alumnoSubscription!: Subscription;

  ngOnInit(): void {
    this.alumnoService.obtenerObservable().subscribe((alumnos) => {
      this.alumnos = alumnos;
    });
    this.alumnoService.alumnoSubject.subscribe((alumnos) => {
      this.alumnos = alumnos;
    });
    this.alumnoSubscription = this.alumnoService
      .obtenerObservable()
      .subscribe((alumnos) => {
        this.alumnos = this.alumnoService.obtenerAlumnos();
      });
  }

  ngAfterViewInit() {
    this.alumnos = this.alumnoService.obtenerAlumnos();
  }

  ngOnDestroy(): void {
    this.alumnoSubscription.unsubscribe();
  }

  constructor(private alumnoService: AlumnoService) {
    this.alumnos = this.alumnoService.obtenerAlumnos();
  }

  addAlumno(alumno: any) {
    this.alumnoService.addAlumno(this.formContacto.value);
    this.alumnoService.obtenerAlumnos();
    this.alumnoService.obtenerObservable();
    console.log('thissss here', this.alumnos);
  }
}
