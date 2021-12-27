import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(private _http: HttpClient) { }

  logoutUser(data: any): Observable<any> {
    let urlService = environment.urlBase + "login";
    return this._http.post(urlService, data);
  }

  remove(user: string): void {
    try {
      localStorage.removeItem(user);
    } catch (e) {
      console.error('Error removing key', e);
    }
  }

}
