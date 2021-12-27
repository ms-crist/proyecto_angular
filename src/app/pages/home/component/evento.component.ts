import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';





@Component({
  selector: 'app-event',
  templateUrl: './evento.component.component.html',
  styleUrls: ['./component.component.css']
})
export class EventoComponent {
  @Input() value: any;
}

