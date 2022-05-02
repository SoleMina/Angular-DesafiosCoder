import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './modules/alumnos/components/contenido/contenido.component';
import { FormularioComponent } from './modules/alumnos/components/formulario/formulario.component';
import { AltaCursoComponent } from './modules/cursos/components/alta-curso/alta-curso.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: ContenidoComponent,
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio/alumno/nuevo-alumno',
    component: FormularioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
