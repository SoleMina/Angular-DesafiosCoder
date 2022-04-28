import { Pipe, PipeTransform } from '@angular/core';
import { AlumnoService } from 'src/app/core/services/alumno.service';

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  alumnos: any[] = [];
  transform(value: any): string {
    let resultado: string;
    //console.log(value);
    //console.log(this.alumnoService.obtenerAlumnos());
    //console.log(this.alumnoService.obtenerAlumnos()[value].name);
    resultado =
      this.alumnoService.obtenerAlumnos()[value - 1].name +
      ' ' +
      this.alumnoService.obtenerAlumnos()[value - 1].age;
    return resultado;
  }
  constructor(private alumnoService: AlumnoService) {}
}
