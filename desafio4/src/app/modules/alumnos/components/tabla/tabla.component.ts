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
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTablaComponent } from '../edit-tabla/edit-tabla.component';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
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
    public dialogoRef: MatDialog,
    private router: Router
  ) {
    this.alumnoService.alumnoSubject.next(this.alumnos);
  }

  ngOnInit(): void {
    this.alumnoService.obtenerAlumno().subscribe((alumnos) => {
      this.alumnos = alumnos;
    });
  }

  openDialog() {
    this.dialogoRef
      .open(EditTablaComponent, {
        width: '650px',
        data: this.alumnoSelected,
      })
      .afterClosed()
      .subscribe((result) => {
        this.router.navigate(['alumnos']);
      });
  }

  ngAfterViewInit() {
    this.alumnoService.obtenerAlumno().subscribe((alumno: Alumno[]) => {
      this.alumnos = alumno;
    });
  }
  ngOnDestroy(): void {
    //this.alumnoSubscription.unsubscribe();
  }

  userClicked(username: string) {
    this.tabla1?.renderRows();
    console.log('El usuario ' + username + ' fue clickeado');
  }
  eliminarAlumno(position: string) {
    Swal.fire({
      title: '¿Estás seguro de que quieres eliminar este alumno?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        this.tabla1?.renderRows();
        Swal.fire('Eliminado!', '', 'success');
        this.alumnoService.eliminarAlumno(position).subscribe((alumnos) => {
          //this.alumnos = alumnos;
        });
      }
    });
  }
  muestraAlumno(alumno: any) {
    this.tabla1?.renderRows();
    this.alumnoService.muestraAlumno(alumno);
  }

  seleccionarAlumno(alumno: Alumno) {
    this.alumnoSelected = alumno;
  }
}
