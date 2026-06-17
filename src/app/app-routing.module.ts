import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {IncidentListComponent} from "./incident-list/incident-list.component";
import {IncidentDetailsComponent} from "./incident-details/incident-details.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'incidents', component: IncidentListComponent},
  {path: 'incidents/:id', component: IncidentDetailsComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
