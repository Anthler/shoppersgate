import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
  <div fxLayout="column" fxLayoutAlign="center center">
  <span class="mat-display-2">Hurray Shoppers! </span>
  <button mat-raised-button color="primary">Login as Manager</button>
</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
