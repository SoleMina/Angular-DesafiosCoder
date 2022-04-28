import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosModule } from '../modules/cursos/cursos.module';
import { AppRoutingModule } from '../app-routing.module';
import { ContenidoComponent } from '../modules/alumnos/components/contenido/contenido.component';

@NgModule({
  declarations: [ContenidoComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [AppRoutingModule, CursosModule],
})
export class CoreModule {}
