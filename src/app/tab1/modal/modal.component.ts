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

  constructor(private modalController: ModalController,
    public navCtrl: NavController) {
    
  }


  ngOnInit() {}

  confirmMonitoria() {
    this.modalController.dismiss(this.monitoria);
  }

    async cancel(){
      await this.modalController.dismiss(this.monitoria)
    }
}

