import { Component, OnInit } from '@angular/core';
import { MENUITEMS } from '../menuitems';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems = MENUITEMS;

  constructor() { }

  ngOnInit() {
  }

}
