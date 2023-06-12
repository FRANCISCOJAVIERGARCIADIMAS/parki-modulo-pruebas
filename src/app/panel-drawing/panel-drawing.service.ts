import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanelDrawingService {

  constructor(private http: HttpClient) { }

  drawingPredictMsg(recurso: any) {
    return this.http.post<any>('https://parkinson-modulo-ia-production.up.railway.app/trazos/asignar', recurso);
  }
  
}
