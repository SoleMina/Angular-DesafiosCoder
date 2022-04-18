import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { DatosService } from './services/datos.service';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './modules/app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [DatosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
