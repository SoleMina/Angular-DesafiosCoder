import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './autenticacion/auth.guard';
import { LoginComponent } from './autenticacion/login/login.component';
import { ContenidoComponent } from './modules/alumnos/components/contenido/contenido.component';
import { EditTablaComponent } from './modules/alumnos/components/edit-tabla/edit-tabla.component';
import { FormularioComponent } from './modules/alumnos/components/formulario/formulario.component';
import { TablaComponent } from './modules/cursos/components/tabla/tabla.component';

const routes: Routes = [
  {
    path: 'alumnos',
    component: ContenidoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'alumnos',
    pathMatch: 'full',
  },
  {
    path: 'autenticacion/login',
    component: LoginComponent,
    loadChildren: () =>
      import('./autenticacion/autenticacion.module').then(
        (m) => m.AutenticacionModule
      ),
  },
  {
    path: 'alumnos/nuevo-alumno',
    component: FormularioComponent,
  },
  {
    path: 'cursos',
    component: TablaComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/cursos/cursos.module').then((m) => m.CursosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
