import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoSenterPageRoutingModule } from './produto-senter-routing.module';

import { ProdutoSenterPage } from './produto-senter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoSenterPageRoutingModule
  ],
  declarations: [ProdutoSenterPage]
})
export class ProdutoSenterPageModule {}
