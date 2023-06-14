import { Component } from '@angular/core';
import { InteractionsService } from '../interactions.service';
import { HomeService } from 'src/app/home/home.service';
import { Paciente } from 'src/app/home/interfaces/Pacientes';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-select-patient',
  templateUrl: './select-patient.component.html',
  styleUrls: ['./select-patient.component.scss']
})
export class SelectPatientComponent {
  showModal!: boolean;
  loading: boolean = false;
  listPatients: Paciente[] = []

  constructor(private modalService: InteractionsService,
    private _homeS: HomeService,
    private sanitizer: DomSanitizer
  ) {
    this.getPatients();
  }

  ngOnInit() {
    this.showModal = false;
    this.modalService.modalState.subscribe((state: boolean) => {
      this.showModal = state;
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }

  selectPatient(idPatientS: any) {
    this._homeS.setPatientS(idPatientS)
    this.closeModal();
    // console.log("Patient S", this._homeS.getPatientS());
  }

  getPatients() {
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

  getAvatarUrl(data: number[]): any {
    if (data && data.length > 0) {
      const base64Image = btoa(String.fromCharCode(...data));
      const imageUrl = `data:image/jpeg;base64,${base64Image}`;
      return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    } else {
      return ''; // o puedes proporcionar una imagen de relleno predeterminada
    }
  }




}
