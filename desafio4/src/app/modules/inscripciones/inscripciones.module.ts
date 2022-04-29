import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaInscripcionComponent } from './components/alta-inscripcion/alta-inscripcion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app.material.module';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';

@NgModule({
  declarations: [AltaInscripcionComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    InscripcionesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class InscripcionesModule {}
