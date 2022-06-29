import { Component, OnInit } from '@angular/core';
import { menuItems } from './menu-items';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {
  menuItems: any = []
  constructor() {
    this.menuItems = menuItems
  }

  ngOnInit(): void {

  }

}
