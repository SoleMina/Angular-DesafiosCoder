import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaCursoComponent } from './components/alta-curso/alta-curso.component';

const routes: Routes = [
  {
    path: 'cursos',
    component: AltaCursoComponent,
  },
  {
    path: 'cursos/example',
    component: AltaCursoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoRoutingModule {}
