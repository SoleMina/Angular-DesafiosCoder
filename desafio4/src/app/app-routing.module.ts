import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './core/alumnos/components/contenido/contenido.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
