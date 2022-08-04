import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { monitoriaInterface } from '../tab1.page';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})


export class ModalComponent implements OnInit {

  @Input() monitoria: monitoriaInterface;

  constructor(
    private modalCtrl: ModalController,
    public navCtrl: NavController) {

  }


  ngOnInit() { }

  confirmMonitoria() {
    this.modalCtrl.dismiss(this.monitoria);
  }

  // arrumar a função cancel pois está postando a monitoria
  fecharModal() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}

