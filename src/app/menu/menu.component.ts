import { Component, OnInit } from '@angular/core';
import { MENUITEMS } from '../menuitems';

// declare empty arrays corresponding to menu item types
const rawBar = [];
const soups = [];
const salads = [];
const starters = [];
const sandies = [];
const works = [];
const sides = [];

// loops through the menuitems array and sorts by item type
for (const item of MENUITEMS) {
  if (item.type === 'Raw Bar') {
    rawBar.push(item);
  } else if (item.type === 'soup') {
    soups.push(item);
  } else if (item.type === 'salad') {
    salads.push(item);
  } else if (item.type === 'starter') {
    starters.push(item);
  } else if (item.type === 'fries on the side') {
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
  // title and subtitle values
  title = 'Check Out Our Menu';
  subTitle = 'Call us for daily specials';
  
  // declaring item types for use in menu.html
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
