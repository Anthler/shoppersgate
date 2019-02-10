import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ManagerHomeComponent } from "./manager-home/manager-home.component";
import { Routes, RouterModule } from "@angular/router";
import { ManagerRoutingModule } from "./manager-routing.module";
import { ManagerComponent } from "./manager.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { RecieptLookupComponent } from "./reciept-lookup/reciept-lookup.component";

import { MaterialModule } from "../material/material.module";

@NgModule({
  imports: [CommonModule, ManagerRoutingModule, MaterialModule],
  declarations: [
    ManagerHomeComponent,
    ManagerComponent,
    UserManagementComponent,
    RecieptLookupComponent
  ]
})
export class ManagerModule {}
