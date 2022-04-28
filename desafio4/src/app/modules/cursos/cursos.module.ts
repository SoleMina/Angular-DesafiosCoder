import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaCursoComponent } from './components/alta-curso/alta-curso.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursoRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [AltaCursoComponent],
  imports: [SharedModule, CommonModule, CursoRoutingModule],
})
export class CursosModule {}
