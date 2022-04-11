import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContenidoDialogComponent } from '../contenido-dialog/contenido-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(public dialogoRef: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialogoRef.open(ContenidoDialogComponent, {
      width: '600px',
      data: {
        name: 'Karina',
        lastname: 'Prado',
        course: 'Angular',
        rol: 'Programmer',
      },
    });
  }
}
