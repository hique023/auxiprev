import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanosindicadosPageRoutingModule } from './planosindicados-routing.module';

import { PlanosindicadosPage } from './planosindicados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanosindicadosPageRoutingModule
  ],
  declarations: [PlanosindicadosPage]
})
export class PlanosindicadosPageModule {}
