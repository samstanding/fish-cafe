import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //cafe name, address and hours saved in js
  //simulates an external db or api that data would be saved in
  name ='Frankie\'s Fish Cafe';
  address = '8257 Ridgeview St. Darien, CT 06820';
  message ='';

  hours = {
    m: '12:00pm - 11:00pm',
    t: '12:00pm - 11:00pm',
    w: '12:00pm - 11:00pm',
    th: '12:00pm - 11:00pm',
    f: '12:00pm - 12:00am',
    s: '12:00pm - 12:00am',
    su: '12:00pm - 11:00pm',
  }

  constructor() { }

  ngOnInit() {
  }

}
