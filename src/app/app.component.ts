import { Component, Input } from '@angular/core';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  eventos: Array<any> = [
    { hora: '08:00', asunto: 'Breakfast with Simon', lugar: 'Lounge Caffe', descripcion: 'Discuss Q3 targets' },
    { hora: '08:30', asunto: 'Daily Standup Meeting (recurring)', lugar: 'Warsaw Spire Office' },
    { hora: '09:00', asunto: 'Call with HRs' },
    { hora: '12:00', asunto: 'Lunch with Timmoty', lugar: 'Canteen', descripcion: 'Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a' },
  ];

}
