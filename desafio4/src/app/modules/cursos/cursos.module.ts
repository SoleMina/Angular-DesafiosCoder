import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaCursoComponent } from './components/alta-curso/alta-curso.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursoRoutingModule } from './cursos-routing.module';
import { AppMaterialModule } from '../app.material.module';

@NgModule({
  declarations: [AltaCursoComponent],
  imports: [
    SharedModule,
    AppMaterialModule,
    CommonModule,
    CursoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CursosModule {}
