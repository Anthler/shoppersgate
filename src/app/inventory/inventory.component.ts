import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  template: `
    <p>
      inventory works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
