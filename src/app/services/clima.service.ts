import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = ' https://api.gael.cloud/general/public/clima/SCQN'

  constructor(
    private http: HttpClient
  ) {
    console.log('Servicio')
  }
  getClima() {
    let header = new HttpHeaders()
      .set('type-content', 'aplication/json')

    return this.http.get(this.url, {
      headers: header
    });
  }

}
