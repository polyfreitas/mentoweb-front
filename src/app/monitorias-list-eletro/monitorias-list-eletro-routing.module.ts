import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoriasListEletroPage } from './monitorias-list-eletro.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoriasListEletroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoriasListEletroPageRoutingModule {}
