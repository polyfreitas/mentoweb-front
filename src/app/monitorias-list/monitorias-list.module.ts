import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitoriasListPageRoutingModule } from './monitorias-list-routing.module';

import { MonitoriasListPage } from './monitorias-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitoriasListPageRoutingModule
  ],
  declarations: [MonitoriasListPage]
})
export class MonitoriasListPageModule {}
