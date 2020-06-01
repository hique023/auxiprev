import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompareplanosPage } from './compareplanos.page';

const routes: Routes = [
  {
    path: '',
    component: CompareplanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompareplanosPageRoutingModule {}
