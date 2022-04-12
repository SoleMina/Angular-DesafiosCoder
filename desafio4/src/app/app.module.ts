import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app.material.module';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ContenidoDialogComponent } from './components/contenido-dialog/contenido-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnoService } from './services/alumno.service';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { FontDirective } from './directives/font.directive';
import { FullnamePipe } from './pipes/fullname.pipe';

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
    FullnamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
