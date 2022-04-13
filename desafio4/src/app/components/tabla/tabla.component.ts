import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  Input,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/interfaces/PeriodicElement';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  alumnos: Alumno[] = [];
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
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) tabla1!: MatTable<PeriodicElement>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.alumnos = this.alumnoService.obtenerAlumnos();
  }

  ngOnInit(): void {
    this.alumnoService.obtenerObservable().subscribe((alumnos) => {
      this.alumnos = alumnos;
    });
  }

  constructor(private alumnoService: AlumnoService) {
    this.alumnos = this.alumnoService.obtenerAlumnos();
    this.tabla1?.renderRows();
  }
  userClicked(username: string) {
    console.log('El usuario ' + username + ' fue clickeado');
  }
  eliminarAlumno(position: number) {
    this.alumnoService.eliminarAlumno(position);
    this.tabla1?.renderRows();
    console.log(this.alumnos);
  }
  modificarAlumno(alumno: any) {
    this.alumnoService.modificarAlumno(alumno);
    this.tabla1?.renderRows();
  }
  muestraAlumno(alumno: any) {
    this.alumnoService.muestraAlumno(alumno);
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
