import { Component, OnDestroy, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/interfaces/alumno';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-tabla',
  templateUrl: './edit-tabla.component.html',
  styleUrls: ['./edit-tabla.component.css'],
})
export class EditTablaComponent implements OnInit, OnDestroy {
  alumnos: Alumno[] = [];
  formModificar: FormGroup = new FormGroup({
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
  title: string = 'Update Form';

  private alumnoSubscription!: Subscription;

  @ViewChild(MatTable) tabla1!: MatTable<Alumno>;

  constructor(
    private alumnoService: AlumnoService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.alumnoService.obtenerAlumno().subscribe((alumno: Alumno[]) => {
      this.alumnos = alumno;
    });
    //this.alumnoService.alumnoSubject.next(this.alumnos);

    this.formModificar.setValue({
      position: this.data.position,
      name: this.data.name,
      age: this.data.age,
      course: this.data.course,
      grade: this.data.grade,
      email: this.data.email,
    });
  }

  ngOnInit(): void {
    this.alumnoService.obtenerAlumno().subscribe((alumno: Alumno[]) => {
      this.alumnos = alumno;
    });
    //this.alumnoService.alumnoSubject.subscribe((alumnos) => {
    //this.alumnos = alumnos;
    //});
    //this.alumnoSubscription = this.alumnoService
    //.obtenerObservable()
    //.subscribe((alumnos) => {
    //this.alumnos = this.alumnoService.obtenerAlumnos();
    //});
    //this.updateAlumno();
  }

  ngAfterViewInit() {
    this.alumnoService.obtenerAlumno().subscribe((alumno: Alumno[]) => {
      this.alumnos = alumno;
    });
  }

  ngOnDestroy(): void {
    //this.alumnoSubscription.unsubscribe();
  }

  updateAlumno() {
    let alumno: Alumno = {
      position: this.data.position,
      name: this.formModificar.value.name,
      age: this.formModificar.value.age,
      course: this.formModificar.value.course,
      grade: this.formModificar.value.grade,
      email: this.formModificar.value.email,
    };
    this.alumnoService.updateAlumno(alumno).subscribe(console.log);
  }
}
