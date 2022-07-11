import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { IonModal, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

export class monitoriaInterface {
  id: string;
  monitor: string;
  data: string;
  local: string;
  horario: string;
  disciplina: string;
}

export class EditModule { }

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    public monitorias: monitoriaInterface[] = [
      {
        data: '07/07',
        disciplina: 'Matemática 6',
        horario: '14h',
        id: '1',
        local: 'Sala 10',
        monitor: 'Polyana Alves de Freitas',
      },
      {
        data: '29/04',
        disciplina: 'Segurança da Informação',
        horario: '09h',
        id: '2',
        local: 'Biblioteca',
        monitor: 'Maria Elis Oliveira Garcia',
      }
    ];
    public monitoriaName: string = '';
  
  constructor(public navCtrl: NavController,
              private modalController: ModalController
    ) { }

    ngOnInit(): void {
      
    }

    async openEditMonitoria(monitoria?: monitoriaInterface) {

      const hasMonitoria = !!monitoria;

      if(!monitoria){
        monitoria={
          data: '',
          disciplina: '',
          horario:'',
          id: '',
          local: '',
          monitor: '',
        }
      }
      const modal = await this.modalController.create({
        component: ModalComponent,
        cssClass: 'edit-monitoria-modal',
        componentProps: {monitoria}
      });
  
      await modal.present();
      modal.onWillDismiss().then(res => {
        if (!hasMonitoria) {
          this.monitorias.push(res.data)
        }
      })
    }

    deleteMonitoria(id){
      this.monitorias = this.monitorias.filter(monitoria => monitoria.id !=id);
    }

  showTab2() {
    this.navCtrl.navigateForward('tab2');
    }
    
    showTab3() {
    this.navCtrl.navigateForward('tab3');
      }
    }