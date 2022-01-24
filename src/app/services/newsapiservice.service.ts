import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {


  constructor(private _http: HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=ar&apiKey=7138ff0f22a64577bac68718c5923bfc"

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }



}
