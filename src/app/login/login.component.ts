import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading = false;
  infoCuidador:any;
  
  constructor(private _loginService: LoginService, private fb: FormBuilder,
    private router: Router) {
  }

  miForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  login() {

    console.log(this.miForm.value)
    const { email, password } = this.miForm.value;

    this._loginService.login( email, password )
      .subscribe( ok => {

        if ( ok ) {
          this.fakeLoading();
          this.cargarInfoCuidador();
          console.log(this.miForm.value);
        } else {
          // this.error();
          this.presentToast("Credenciales incorrectas");
          // console.log("OKERROR",ok)
          // this.miForm.reset();
        }
      }
      );
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/home']);
      this.loading = false;
      this.presentToast('Bienvenido');
    }, 3000);
  }

  async presentToast(messageX: string) {
    console.log("TOAST", messageX);
  }

  cargarInfoCuidador() {
    this._loginService.getInfoPatient().subscribe(
      contenido => {
        console.log("Cuidador", contenido);
        this.infoCuidador = JSON.stringify(contenido)
        localStorage.setItem('infoCuidador', this.infoCuidador)
      },
      error => {
        console.error(error);
      }
      );
  }

}
