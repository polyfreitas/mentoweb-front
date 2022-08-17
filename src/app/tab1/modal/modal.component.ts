import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { monitoriaInterface } from '../tab1.page';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})

export class ModalComponent implements OnInit {
  isModalOpen = false;

  @Input() monitoria: monitoriaInterface;

  constructor(
    private alertController: AlertController,
    public datepipe: DatePipe,
    private location: Location,
    public modalCtrl: ModalController,
    public navCtrl: NavController) {

  }


  ngOnInit() {}

  confirmMonitoria() {
    if (!this.checkMonitoria()) {
      this.presentAlert();
      return;
    }
    this.monitoria.data = this.datepipe.transform(this.monitoria.data, 'dd/MM/yyyy');
    this.monitoria.horario = this.datepipe.transform(this.monitoria.horario, 'HH:mm');
    this.modalCtrl.dismiss(this.monitoria);
  }

  cancel () {
    this.modalCtrl.dismiss();
  }

  checkMonitoria() : boolean {
    if (this.monitoria.disciplina.nome.length<5)
      return false;

    if (this.monitoria.monitor.nomeCompleto.length<7)
    return false;

    if (this.monitoria.local.length<3)
    return false;
    
    return true;

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Preencha todos os campos corretamente!',
      buttons: [
        
        {
          text: 'OK',
          role: 'confirm',
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
