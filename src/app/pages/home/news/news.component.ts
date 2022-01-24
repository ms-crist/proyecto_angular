import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from 'src/app/services/newsapiservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})


export class NewsComponent implements OnInit {
  fechahoy: any = new Date();


  constructor(private _services: NewsapiserviceService) { }
  muestraTitulares: any = [];


  ngOnInit(): void {
    this._services.topHeading().subscribe((result: any) => {
      console.log(result);
      this.muestraTitulares = result.articles;
    })

  }

}
