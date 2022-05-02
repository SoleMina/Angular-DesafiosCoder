import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { AltaCursoComponent } from '../alta-curso/alta-curso.component';
import Swal from 'sweetalert2';
import { Curso } from 'src/app/interfaces/curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  private cursoSubscription!: Subscription;
  cursos: Curso[] = [];
  alumnoSelected: any;
  cursoSelected: any;
  //alumnos: any[] = [];
  fecha: any = Date.now();

  @ViewChild(MatTable) tabla1!: MatTable<Curso>;

  constructor(
    private alumnoService: AlumnoService,
    public dialogoRef: MatDialog,
    private router: Router
  ) {
    this.alumnoService.obtenerCurso().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  openDialog() {
    this.dialogoRef
      .open(AltaCursoComponent, {
        width: '630px',
        height: '560px',
      })
      .afterClosed()
      .subscribe((result) => {
        this.router.navigate(['cursos']);
      });
  }

  ngOnInit(): void {
    this.alumnoService.obtenerCurso().subscribe((cursos) => {
      this.cursos = cursos;
    });

    this.alumnoService.alumnoSubject.subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  ngAfterViewInit() {
    this.alumnoService.obtenerCurso().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }
  ngOnDestroy(): void {
    this.cursoSubscription.unsubscribe();
  }

  userClicked(username: string) {
    this.tabla1?.renderRows();
    console.log('El usuario ' + username + ' fue clickeado');
  }
  /*
  eliminarCurso(position: number) {
    Swal.fire({
      title: '¿Estás seguro de que quieres eliminar este alumno?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
       Read more about isConfirmed, isDenied below 
      if (result.isConfirmed) {
        this.alumnoService.eliminarAlumno(position);
        this.tabla1?.renderRows();
        Swal.fire('Eliminado!', '', 'success');
      }
    });
  }
  */
  muestraCurso(curso: any) {
    this.alumnoService.muestraCurso(curso);
  }

  seleccionarCurso(curso: Curso) {
    this.cursoSelected = curso;
  }
  eliminarCurso(id: number) {
    Swal.fire({
      title: '¿Estás seguro de que quieres eliminar este alumno?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        this.tabla1?.renderRows();
        Swal.fire('Eliminado!', '', 'success');
        this.alumnoService.eliminarCurso(id).subscribe((cursos) => {});
      }
    });
  }
}
