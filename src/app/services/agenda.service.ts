import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  url = 'https://api.gael.cloud/general/public/clima/SCTB'

  constructor(
    private http: HttpClient
  ) {
    console.log('Servicio')
  }
  getClima() {
    let header = new HttpHeaders()
      .set('curl -X GET --header', 'Accept: application/json')

    return this.http.get(this.url, {
      headers: header
    });
  }
}
