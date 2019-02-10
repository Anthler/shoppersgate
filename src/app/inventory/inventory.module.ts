import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from "../material/material.module";

import { InventoryRoutingModule } from "./inventory-routing.module";
import { InventoryComponent } from "./inventory.component";
import { InventoryHomeComponent } from "./inventory-home/inventory-home.component";
import { ProductComponent } from "./product/product.component";
import { StockEntryComponent } from "./stock-entry/stock-entry.component";
import { CategoriesComponent } from "./categories/categories.component";

@NgModule({
  imports: [CommonModule, MaterialModule, InventoryRoutingModule],
  declarations: [
    InventoryComponent,
    InventoryHomeComponent,
    ProductComponent,
    StockEntryComponent,
    CategoriesComponent
  ]
})
export class InventoryModule {}
