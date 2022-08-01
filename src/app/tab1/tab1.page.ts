import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { IonModal, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { AlertController } from '@ionic/angular';
import { MonitoriaService } from '../services/monitoria.service';

export class monitoriaInterface {
  id: string;
  monitor: {
    id: number,
    email: string,
    senha: string,
    perfis: string[],
    nomeCompleto: string,
    disciplina: string,
    ra: string
  };

  data: string;
  horario: string;
  local: string;

  disciplina: {
    id: number,
    nome: string,
    curso: {
      id: number,
      nome: string,
    }
  };

}

export class EditModule { }

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public monitorias: monitoriaInterface[] = [

  ];
  public monitoriaName: string = '';

  constructor(public navCtrl: NavController,
    private modalController: ModalController,
    public alertController: AlertController,
    private monitoriaService: MonitoriaService,
  ) { }

  ngOnInit(): void {
    this.getMonitorias();
  }

  getMonitorias() {
    this.monitoriaService.getMonitorias().subscribe((res: any) => {
      this.monitorias=res;
    })
  }

  async openEditMonitoria(monitoria?: monitoriaInterface) {

    const hasMonitoria = !!monitoria;

    if (!monitoria) {
      monitoria = {
        data: '',
        horario: '',
        disciplina: {
          curso: {
            id: null,
            nome: '',
          },
          id: null,
          nome: '',

        },
        id: '',
        local: '',
        monitor: {
          disciplina: '',
          email: '',
          id: null,
          nomeCompleto: '',
          perfis: [],
          ra: '',
          senha: '',
        }
      }
    }
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'edit-monitoria-modal',
      componentProps: { monitoria }
    });

    await modal.present();
    modal.onWillDismiss().then(res => {
      if (!hasMonitoria) {
        this.monitorias.push(res.data)
      }
    })
  }

  deleteMonitoria(id) {
    this.monitorias = this.monitorias.filter(monitoria => monitoria.id != id);
  }
}