import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaInscripcionComponent } from './components/alta-inscripcion/alta-inscripcion.component';

const routes: Routes = [
  {
    path: 'inscripciones',
    component: AltaInscripcionComponent,
  },
  {
    path: 'inscripciones/example',
    component: AltaInscripcionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscripcionesRoutingModule {}
