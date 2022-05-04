import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { AutenticacionService } from '../core/services/autenticacion.service';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../modules/app.material.module';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    AppMaterialModule,
    AutenticacionRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [],
})
export class AutenticacionModule {}
