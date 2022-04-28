import { Component, OnDestroy, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-edit-tabla',
  templateUrl: './edit-tabla.component.html',
  styleUrls: ['./edit-tabla.component.css'],
})
export class EditTablaComponent implements OnInit, OnDestroy {
  alumnos: any[] = [];
  formModificar: FormGroup = new FormGroup({
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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.alumnos = this.alumnoService.obtenerAlumnos();
    this.alumnoService.alumnoSubject.next(this.alumnos);

    this.formModificar.setValue({
      name: this.data.name,
      age: this.data.age,
      course: this.data.course,
      grade: this.data.grade,
      email: this.data.email,
    });
  }

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
    this.updateAlumno();
  }

  ngAfterViewInit() {
    this.alumnos = this.alumnoService.obtenerAlumnos();
  }

  ngOnDestroy(): void {
    this.alumnoSubscription.unsubscribe();
  }

  updateAlumno() {
    let alumno = this.formModificar.value;
    this.alumnoService.updateAlumno(alumno);
    return this.alumnos;
  }
}
