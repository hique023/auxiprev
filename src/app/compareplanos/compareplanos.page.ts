import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-compareplanos',
  templateUrl: './compareplanos.page.html',
  styleUrls: ['./compareplanos.page.scss'],
})
export class CompareplanosPage implements OnInit {

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Parabéns! Você deu um passo a mais para avançar em seus sonhos!',
      subHeader: 'Em breve um consultor lhe contará para confirmar os dados.',
      message: 'Continuar?',
      buttons: ['Não', 'Sim']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
