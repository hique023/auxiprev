import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'O que é previdência privada?',
      message: 'É um plano privado ministrado por uma instituição fechada que visa garantir uma estabilidade para pessoas que contribuiram por um determinado período de tempo.',
      buttons: ['Entendi!']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
