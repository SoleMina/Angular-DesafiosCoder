import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/core/services/autenticacion.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup = new FormGroup({
    correo: new FormControl(''),
    contrasena: new FormControl(''),
  });

  constructor(private auth: AutenticacionService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    const correo = this.formularioLogin.value.correo;
    const contrasena = this.formularioLogin.value.contrasena;

    this.auth.login(correo, contrasena).subscribe((data: Usuario[]) => {
      if (data.length === 1) {
        console.log('Usuario logueado exitosamente', data);
        this.auth.establecerSesion(true, data[0]);
      } else {
        console.log('Error de autenticación');
      }
    });
  }
}
