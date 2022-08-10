import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoriasListPage } from './monitorias-list.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoriasListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoriasListPageRoutingModule {}
