import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { EditTablaComponent } from './components/edit-tabla/edit-tabla.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    component: ContenidoComponent,

    children: [
      {
        path: 'nuevo-alumno',
        component: FormularioComponent,
      },
      {
        path: 'editar-alumno',
        component: EditTablaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoRoutingModule {}
