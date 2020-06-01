import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanosindicadosPage } from './planosindicados.page';

const routes: Routes = [
  {
    path: '',
    component: PlanosindicadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanosindicadosPageRoutingModule {}
