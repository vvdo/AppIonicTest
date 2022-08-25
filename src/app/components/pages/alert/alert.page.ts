import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }
 async alertComun(){
    const alert = await this.alertCtrl.create({
    header: 'Alerta',
    subHeader: 'Mensagem Importante',
    message: 'Seu app vai explodir!',
    buttons: ['OK', 'Delete', 'Save'],
  });

  await alert.present();
 }
}
