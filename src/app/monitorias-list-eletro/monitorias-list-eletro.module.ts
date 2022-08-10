import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitoriasListEletroPageRoutingModule } from './monitorias-list-eletro-routing.module';

import { MonitoriasListEletroPage } from './monitorias-list-eletro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitoriasListEletroPageRoutingModule
  ],
  declarations: [MonitoriasListEletroPage]
})
export class MonitoriasListEletroPageModule {}
