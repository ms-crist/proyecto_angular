import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit, AfterViewInit {
  public load: boolean;
  public climas: Array<any> = [];
  route: any;
  now!: Date;





  constructor(private _Climaservice: ClimaService) {
    this.load = false;
    this._Climaservice.getClima().subscribe((resp: any) => {
      console.log(resp)
      this.climas = resp
    }
    )
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  resolverImagen() {
    let dato = document.getElementById('nomarchivo')?.textContent;
    return `assets/${dato}.png`;
  }



  ngOnInit(): void {


    this.now = new Date();

    setInterval(() => {

      this.now = new Date();

    }, 1000);

    setTimeout(() => {
      this.load = true;
    }, 5000);
  }

}




