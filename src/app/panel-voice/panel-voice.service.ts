import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PanelVoiceService {

  constructor(private http: HttpClient) { }

  VoicePredictMsg(recurso: any) {
    return this.http.post<any>('https://parkinson-modulo-ia-production.up.railway.app/voz/asignar', recurso);
  }

}


