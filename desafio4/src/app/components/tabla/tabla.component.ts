import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  Input,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/interfaces/PeriodicElement';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  alumnos: any[] = [];
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.alumnoService.obtenerObservable().subscribe((alumnos) => {
      this.alumnos = alumnos;
    });
  }

  modificarCurso(alumno: any) {
    this.alumnoService.modificarAlumno(alumno);
  }

  constructor(private alumnoService: AlumnoService) {}
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Karina',
    age: 21,
    course: 'Angular',
    grade: 20,
    email: 'karina@gmail.com',
    symbol: 'He',
  },
];
