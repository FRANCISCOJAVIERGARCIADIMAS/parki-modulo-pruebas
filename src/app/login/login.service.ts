import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { infoCuidador } from './interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _ok: boolean = false;

  constructor(private http: HttpClient) { }


  login( correo: string, contrasena: string ) {
    this.logout();
    // const url  = "https://app-parkinson-backend.herokuapp.com/api/user/login";
    const url  = "https://api-parkinson-production.up.railway.app/auth/login";
    const body = { correo, contrasena };
  
    //console.log("BODY",body);
    return this.http.post<any>( url, body )
      .pipe(
        tap( resp => {
          if ( resp.access_token ) {
            localStorage.setItem('token', resp.access_token! );
            console.log(resp);
          }
        }),
        map( resp => resp.access_token ),
        catchError( err => of(err.error.msg))
      );
  }

  logout() {
    this._ok=false;
    localStorage.clear();
  }

  getInfoPatient(): Observable<infoCuidador> {
    const url = `https://api-parkinson-production.up.railway.app/usuarios/profile?correo=sofia_rod@gmail.com`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
                                     .set('Content-Type', 'application/json');
    return this.http.get<infoCuidador>(url, { headers });
  }

}
