import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { IonModal, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { AlertController } from '@ionic/angular';

export class monitoriaInterface {
  id: string;
  monitor: string;
  dataehora: string;
  local: string;
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
    
    ];
    public monitoriaName: string = '';
  
  constructor(public navCtrl: NavController,
              private modalController: ModalController,
              public alertController: AlertController,
    ) { }

    ngOnInit(): void {
      
    }

    async openEditMonitoria(monitoria?: monitoriaInterface) {

      const hasMonitoria = !!monitoria;

      if(!monitoria){
        monitoria={
          dataehora: '',
          disciplina: '',
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