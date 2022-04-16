import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  Input,
  OnDestroy,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/interfaces/PeriodicElement';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTablaComponent } from '../edit-tabla/edit-tabla.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit, OnDestroy {
  private alumnoSubscription!: Subscription;
  alumnos: Alumno[] = [];
  alumnoSelected: any;
  //alumnos: any[] = [];
  fecha: any = Date.now();
  displayedColumns: string[] = [
    'position',
    'name',
    'age',
    'course',
    'grade',
    'email',
    'symbol',
  ];
  dataSource = new MatTableDataSource<Alumno>(this.alumnos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) tabla1!: MatTable<PeriodicElement>;

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
    this.dataSource.paginator = this.paginator;
    this.alumnos = this.alumnoService.obtenerAlumnos();
  }
  ngOnDestroy(): void {
    this.alumnoSubscription.unsubscribe();
  }

  constructor(
    private alumnoService: AlumnoService,
    public dialogoRef: MatDialog
  ) {
    this.alumnos = this.alumnoService.obtenerAlumnos();
    this.alumnoService.alumnoSubject.next(this.alumnos);
    this.tabla1?.renderRows();
  }
  openDialog() {
    this.dialogoRef.open(EditTablaComponent, {
      width: '650px',
      data: this.alumnoSelected,
    });
  }

  userClicked(username: string) {
    this.tabla1?.renderRows();
    console.log('El usuario ' + username + ' fue clickeado');
  }
  eliminarAlumno(position: number) {
    this.alumnoService.eliminarAlumno(position);
    this.tabla1?.renderRows();
  }
  modificarAlumno(alumno: any) {
    this.alumnoService.modificarAlumno(alumno);
    this.tabla1?.renderRows();
  }
  muestraAlumno(alumno: any) {
    this.tabla1?.renderRows();
    this.alumnoService.muestraAlumno(alumno);
  }

  seleccionarAlumno(alumno: Alumno) {
    this.alumnoSelected = alumno;
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Karina',
    age: 21,
    course: 'Angular',
    grade: 20,
    email: 'karina@gmail.com',
  },
];
