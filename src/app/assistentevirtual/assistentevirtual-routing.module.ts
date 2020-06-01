import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssistentevirtualPage } from './assistentevirtual.page';

const routes: Routes = [
  {
    path: '',
    component: AssistentevirtualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssistentevirtualPageRoutingModule {}
