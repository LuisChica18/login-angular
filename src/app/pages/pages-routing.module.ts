import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../_service/guard.service';
import { InicioComponent } from './inicio/inicio.component';


export const routes: Routes = [
  { path: 'inicio', component: InicioComponent, canActivate: [GuardService] }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
