import { Component, OnInit } from '@angular/core';
import { MENUITEMS } from '../menuitems';


let rawBar = [];
let soups = [];
let salads = [];
let starters = [];
let sandies = [];
let works = [];
let sides = [];


for (let item of MENUITEMS) {
  if(item.type === 'Raw Bar') {
    rawBar.push(item);
  } else if (item.type === 'soup') {
    soups.push(item); 
  } else if (item.type === 'salad') {
    salads.push(item);
  } else if (item.type === 'starter') {
    starters.push(item);
  } else if(item.type === 'fries on the side') {
    sandies.push(item);
  } else if (item.type === 'the works') {
    works.push(item);
  } else if (item.type === 'sides') {
    sides.push(item);
  }
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
 rawBar = rawBar;
 soups = soups;
 salads = salads;
 starters = starters;
 sandies = sandies;
 works = works;
 sides = sides;
  
 

  constructor() { }

  ngOnInit() {
  }

}
