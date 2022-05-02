import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ContenidoDialogComponent } from '../contenido-dialog/contenido-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(public dialogoRef: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialogoRef
      .open(ContenidoDialogComponent, {
        width: '650px',
        data: {
          name: 'Karina',
          lastname: 'Prado',
          course: 'Angular',
          rol: 'Programmer',
        },
      })
      .afterClosed()
      .subscribe((result) => {
        this.router.navigate(['alumnos']);
      });
  }
}
