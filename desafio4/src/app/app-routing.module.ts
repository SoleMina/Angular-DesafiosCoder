import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './modules/alumnos/components/contenido/contenido.component';
import { FormularioComponent } from './modules/alumnos/components/formulario/formulario.component';
import { TablaComponent } from './modules/cursos/components/tabla/tabla.component';

const routes: Routes = [
  {
    path: 'alumnos',
    component: ContenidoComponent,
    loadChildren: () =>
      import('./modules/alumnos/alumnos.module').then((m) => m.AlumnosModule),
  },
  {
    path: '',
    redirectTo: 'alumnos',
    pathMatch: 'full',
  },
  {
    path: 'alumnos/nuevo-alumno',
    component: FormularioComponent,
  },
  {
    path: 'cursos',
    component: TablaComponent,
    loadChildren: () =>
      import('./modules/cursos/cursos.module').then((m) => m.CursosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
