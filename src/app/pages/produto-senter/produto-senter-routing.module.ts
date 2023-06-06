import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoSenterPage } from './produto-senter.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoSenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoSenterPageRoutingModule {}
