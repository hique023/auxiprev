import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortabilidadePage } from './portabilidade.page';

const routes: Routes = [
  {
    path: '',
    component: PortabilidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortabilidadePageRoutingModule {}
