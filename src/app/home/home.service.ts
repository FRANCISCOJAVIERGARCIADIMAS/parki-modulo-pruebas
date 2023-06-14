import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './interfaces/Pacientes';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  tokenOk = localStorage.getItem('token');

  private patientSelectedSource = new Subject<any>();
  patientSelected$ = this.patientSelectedSource.asObservable();

  setPatientS(valor: any) {
    this.patientSelectedSource.next(valor);
  }


  constructor(private http: HttpClient) { }

  getPatients(): Observable<Paciente[]> {
    console.log("TOKENOK", this.tokenOk);
    const url = 'https://api-parkinson-production.up.railway.app/pacientes/?idCuidador=4';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenOk}`)
      .set('Content-Type', 'application/json');
    return this.http.get<Paciente[]>(url, { headers });
  }

  
}
