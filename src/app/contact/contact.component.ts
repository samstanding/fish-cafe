import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  phone = '646-641-2212';
  message = 'We take reservations for parties of 4 or more'

  constructor() { }

  ngOnInit() {
  }

}
