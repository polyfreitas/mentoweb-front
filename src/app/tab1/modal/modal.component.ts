import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { monitoriaInterface } from '../tab1.page';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})

export class ModalComponent implements OnInit {
  isModalOpen = false;

  @Input() monitoria: monitoriaInterface;

  constructor(
    private location: Location,
    public modalCtrl: ModalController,
    public navCtrl: NavController) {

  }


  ngOnInit() {}

  confirmMonitoria() {
    this.modalCtrl.dismiss(this.monitoria);
  }

  cancel () {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
