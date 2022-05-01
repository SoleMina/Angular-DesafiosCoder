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
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTablaComponent } from '../edit-tabla/edit-tabla.component';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) tabla1!: MatTable<PeriodicElement>;

  constructor(
    private alumnoService: AlumnoService,
    public dialogoRef: MatDialog
  ) {
    this.alumnoService.obtenerAlumno().subscribe((alumno: Alumno[]) => {
      this.alumnos = alumno;
    });
  }

  ngOnInit(): void {
    this.alumnoService.obtenerAlumno().subscribe((alumno: Alumno[]) => {
      this.alumnos = alumno;
    });
  }

  ngAfterViewInit() {}
  ngOnDestroy(): void {
    this.alumnoSubscription.unsubscribe();
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
