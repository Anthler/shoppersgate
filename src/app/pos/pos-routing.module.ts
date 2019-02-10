import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PosComponent } from "./pos/pos.component";
//import { LogoutComponent } from "../user/logout/logout.component";

const routes: Routes = [{ path: "", component: PosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule {}
