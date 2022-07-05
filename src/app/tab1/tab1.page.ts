import { Component, NgModule } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { EditModalComponent } from './edit-modal/edit-modal.component';


export class monitoriaInterface {
  id: string;
  name: string;
}

@NgModule({
  declarations: [EditModalComponent],
  entryComponents: [EditModalComponent],
  exports: [EditModalComponent]
})

export class EditModule { }

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    public monitoria: monitoriaInterface[] = [];
    public monitoriaName: string = '';
  
  constructor(public navCtrl: NavController,
              private modalController: ModalController
    ) { }

  insertMonitoria(name: string) {
    const id = String(new Date().getTime());

    this.monitoria.push({ name, id });

    this.monitoriaName = '';
  }

  deleteTask(id: string) {
    const newMonitoriaArray: monitoriaInterface[] = this.monitoria.filter((el: monitoriaInterface) => el.id != id);

    this.monitoria = newMonitoriaArray;
  }

  async openEditMonitoria(monitoria: monitoriaInterface) {
    const modal = await this.modalController.create({
      component: EditModalComponent,
      cssClass: 'edit-monitoria-modal',
      componentProps: {
        monitoria
      }
    });

    await modal.present();
  }

  showTab2() {
    this.navCtrl.navigateForward('tab2');
    }
    
    showTab3() {
    this.navCtrl.navigateForward('tab3');
      }
    }