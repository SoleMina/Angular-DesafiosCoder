import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './components/tabla/tabla.component';
import { AltaCursoComponent } from './components/alta-curso/alta-curso.component';

const routes: Routes = [
  {
    path: 'cursos',
    component: TablaComponent,
    children: [
      {
        path: 'nuevo-curso',
        component: AltaCursoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoRoutingModule {}
