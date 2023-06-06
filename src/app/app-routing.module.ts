import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'user-form',
    loadChildren: () => import('./pages/user-form/user-form.module').then( m => m.UserFormPageModule)
  },
  {
    path: 'user-enter',
    loadChildren: () => import('./pages/user-enter/user-enter.module').then( m => m.UserEnterPageModule)
  },

  {
    path: 'user-list',
    loadChildren: () => import('./pages/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'produtosform',
    loadChildren: () => import('./pages/produtosform/produtosform.module').then( m => m.ProdutosformPageModule)
  },
  {
    path: 'produto-senter',
    loadChildren: () => import('./pages/produto-senter/produto-senter.module').then( m => m.ProdutoSenterPageModule)
  },
  {
    path: 'produtos-list',
    loadChildren: () => import('./pages/produtos-list/produtos-list.module').then( m => m.ProdutosListPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
