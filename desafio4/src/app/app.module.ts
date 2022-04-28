import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app.material.module';
import { ContenidoComponent } from './modules/alumnos/components/contenido/contenido.component';
import { FormularioComponent } from './modules/alumnos/components/formulario/formulario.component';
import { ContenidoDialogComponent } from './modules/alumnos/components/contenido-dialog/contenido-dialog.component';
import { DialogComponent } from './modules/alumnos/components/dialog/dialog.component';
import { TablaComponent } from './modules/alumnos/components/tabla/tabla.component';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnoService } from './core/services/alumno.service';
import { ResaltadoDirective } from './shared/directives/resaltado.directive';
import { FontDirective } from './shared/directives/font.directive';
import { EditTablaComponent } from './modules/alumnos/components/edit-tabla/edit-tabla.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CursosModule } from './modules/cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    FormularioComponent,
    ContenidoDialogComponent,
    DialogComponent,
    TablaComponent,
    ResaltadoDirective,
    FontDirective,
    EditTablaComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    CursosModule,
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AlumnoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
