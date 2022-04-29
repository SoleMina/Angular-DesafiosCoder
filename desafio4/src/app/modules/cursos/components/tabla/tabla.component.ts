import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { PeriodicElement } from 'src/app/interfaces/PeriodicElement';
import { Alumno } from 'src/app/models/alumno';
import { AltaCursoComponent } from '../alta-curso/alta-curso.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
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

  constructor(
    private alumnoService: AlumnoService,
    public dialogoRef: MatDialog
  ) {
    this.alumnos = this.alumnoService.obtenerAlumnos();
    this.alumnoService.alumnoSubject.next(this.alumnos);
    this.tabla1?.renderRows();
  }

  openDialog() {
    this.dialogoRef.open(AltaCursoComponent, {
      width: '630px',
      height: '560px',
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
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.alumnos = this.alumnoService.obtenerAlumnos();
  }
  ngOnDestroy(): void {
    this.alumnoSubscription.unsubscribe();
  }

  userClicked(username: string) {
    this.tabla1?.renderRows();
    console.log('El usuario ' + username + ' fue clickeado');
  }
  eliminarAlumno(position: number) {
    Swal.fire({
      title: '¿Estás seguro de que quieres eliminar este alumno?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.alumnoService.eliminarAlumno(position);
        this.tabla1?.renderRows();
        Swal.fire('Eliminado!', '', 'success');
      }
    });
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
