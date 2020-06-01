import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompareplanosPageRoutingModule } from './compareplanos-routing.module';

import { CompareplanosPage } from './compareplanos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompareplanosPageRoutingModule
  ],
  declarations: [CompareplanosPage]
})
export class CompareplanosPageModule {}
