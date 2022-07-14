import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  email: string;

  constructor(
    public navCtrl: NavController,
    public storage: StorageService) {
    }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser()
    if (localUser && localUser.email) {
      this.email = localUser.email;
    }
  }

  showTab1() {
    this.navCtrl.navigateForward('tab1');
    }
    
    showTab2() {
    this.navCtrl.navigateForward('tab2');
      }


}