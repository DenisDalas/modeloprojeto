import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
})
export class UserFormPage implements OnInit {

 

  ngOnInit() {
  }

  constructor(
    private alertController: AlertController,
    private userService:UserService
  ) { }
  user = new User()

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
    //this.userService.add(this.user);
    this.presentAlert("aviso", "cadrasto");
    console.log(this.user);


}

}

