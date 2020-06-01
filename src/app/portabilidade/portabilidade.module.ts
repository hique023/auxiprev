import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortabilidadePageRoutingModule } from './portabilidade-routing.module';

import { PortabilidadePage } from './portabilidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortabilidadePageRoutingModule
  ],
  declarations: [PortabilidadePage]
})
export class PortabilidadePageModule {}
