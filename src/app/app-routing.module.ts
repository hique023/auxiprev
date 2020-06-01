import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'criarconta',
    loadChildren: () => import('./criarconta/criarconta.module').then( m => m.CriarcontaPageModule)
  },
  {
    path: 'assistentevirtual',
    loadChildren: () => import('./assistentevirtual/assistentevirtual.module').then( m => m.AssistentevirtualPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'planosindicados',
    loadChildren: () => import('./planosindicados/planosindicados.module').then( m => m.PlanosindicadosPageModule)
  },
  {
    path: 'compareplanos',
    loadChildren: () => import('./compareplanos/compareplanos.module').then( m => m.CompareplanosPageModule)
  },
  {
    path: 'portabilidade',
    loadChildren: () => import('./portabilidade/portabilidade.module').then( m => m.PortabilidadePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
