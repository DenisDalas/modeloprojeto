import { Component } from '@angular/core';
import {Produto} from '../model/produto';
import { ProdutoService } from '../services/produto-service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private alertController: AlertController
    //private: userService:UserService
  ) { }
 produto = new Produto()
 produtoService = new ProdutoService();

  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });

    await alert.present; { }
  };



  Save() {
    this.produtoService.add(this.produto);
    this.presentAlert("aviso", "cadrasto");
    //console.log(this.user);

  }

}