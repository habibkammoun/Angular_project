import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peopleList: any[] = [
    { name: 'lahbib', date: '12 april', notification: 23, message: 'sahhaa', active: 'border-red-500' },
    { name: 'mahdi', date: '12 april', notification: 85, message: 'cv' },
    { name: 'omaima', date: '12 mars', notification: 2, message: 'cc' }
  ];
}

