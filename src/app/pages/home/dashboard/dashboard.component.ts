import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  seccionAgenda() {
    this._route.navigate(['/evento']);
  }

  seccionClima() {
    this._route.navigate(['/clima']);
  }

  seccionNews() {
    this._route.navigate(['/news']);
  }

}
