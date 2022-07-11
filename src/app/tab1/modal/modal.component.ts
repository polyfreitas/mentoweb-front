import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { monitoriaInterface } from '../tab1.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() monitoria: monitoriaInterface ={
    data: '',
    horario: '',
    disciplina: '',
    id: '',
    local: '',
    monitor: '',
  }

  constructor(private modalController: ModalController) {
    
  }

  ngOnInit() {}

  confirmMonitoria() {
    this.modalController.dismiss(this.monitoria);
  }

}
