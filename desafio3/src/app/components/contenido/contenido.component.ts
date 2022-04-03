import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
})
export class ContenidoComponent implements OnInit {
  title: string = 'List of students';
  fecha: any = Date.now();
  alumnos: any[] = [
    {
      id: 1,
      name: 'Karina',
      lastname: 'Prado',
      grade: 18,
      email: 'karina@gmail.com',
      curso: 'angular',
    },
    {
      id: 2,
      name: 'Carla',
      lastname: 'Caceres',
      grade: 19,
      email: 'carla2022@gmail.com',
      curso: 'angular',
    },
    {
      id: 3,
      name: 'Samantha',
      lastname: 'Paredes',
      grade: 11,
      email: 'sam.paredes@gmail.com',
      curso: 'angular',
    },
    {
      id: 4,
      name: 'Estefania',
      lastname: 'Castro',
      grade: 12,
      email: 'castro.estefania@gmail.com',
      curso: 'angular',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  isOven() {}
  userClicked(username: string) {
    console.log('El usuario ' + username + ' fue clickeado');
  }
}
