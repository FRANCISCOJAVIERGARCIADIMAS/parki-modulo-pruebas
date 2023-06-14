import { Component, OnInit } from '@angular/core';
import { InteractionsService } from '../interactions.service';
import { Router } from '@angular/router';
import { infoCuidador } from 'src/app/login/interfaces/response';
import { DomSanitizer } from '@angular/platform-browser'; 
import { HomeService } from '../../home/home.service';
import { Paciente } from 'src/app/home/interfaces/Pacientes';

@Component({
  selector: 'app-navbar-responsive',
  templateUrl: './navbar-responsive.component.html',
  styleUrls: ['./navbar-responsive.component.scss']
})
export class NavbarResponsiveComponent implements OnInit {
  menuUser: boolean = false;
  infoCuidadorLocal: any;
  infoCuidador: infoCuidador = {
    id: 0,
    Nombre: '',
    Apellidos: '',
    idimgperfil: 0,
    ImagenNombre: '',
    imagenContenido: {
      type: '',
      data: []
    },
    ImagenTipo: '',
    deleted_at: null
  }
  loading: boolean = false;
  listPatients: Paciente[] = []

  patientS:any;

  constructor(private modalService: InteractionsService,
              private router: Router,
              private sanitizer: DomSanitizer,
              private _homeS: HomeService
              ) { }
  ngOnInit(): void {
    this.infoCuidadorLocal = localStorage.getItem('infoCuidador');
    this.infoCuidador = JSON.parse(this.infoCuidadorLocal);
    console.log('INFO CUIDADOR', this.infoCuidador);
    this.patientS = this._homeS.patientSelected$.subscribe(patient => {
      this.patientS = patient;
    });
    console.log("NAVBAR", this.patientS);
  }



  openMenuUser() {
    this.menuUser = !this.menuUser;
  }


  // showModal = false;

  openModal() {
    this.modalService.openModal();
  }


  isActive(route: string): boolean {
    return this.router.url === route;
  }

  getAvatarUrl(data: number[]): any {
    if (data && data.length > 0) {
      const base64Image = btoa(String.fromCharCode(...data));
      const imageUrl = `data:image/jpeg;base64,${base64Image}`;
      return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    } else {
      return ''; // o puedes proporcionar una imagen de relleno predeterminada
    }
  }


  getPatients(){
    this.loading = true; // Mostrar el progress bar

    this._homeS.getPatients().subscribe(
      contenido => {
        this.listPatients = contenido;
        console.log(contenido); // Acceder a los usuarios
        // Acceder a otras propiedades del contenido si las tienes
        this.loading = false; // Ocultar el progress bar cuando se obtenga la información
      
      },
      error => {
        console.error(error);
        // this.errorX = error;
        this.loading = false; // Ocultar el progress bar en caso de error

      }
    );
  }

}
