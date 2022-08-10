import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
 {
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
},
{
path: 'tabs',
loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
},
{
path: 'register',
loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
},
  {
    path: 'monitorias-list',
    loadChildren: () => import('./monitorias-list/monitorias-list.module').then( m => m.MonitoriasListPageModule)
  },
  {
    path: 'monitorias-list-eletro',
    loadChildren: () => import('./monitorias-list-eletro/monitorias-list-eletro.module').then( m => m.MonitoriasListEletroPageModule)
  },


]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}