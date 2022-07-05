import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public navCtrl: NavController) { }

showTab1() {
this.navCtrl.navigateForward('tab1');
}

showTab3() {
this.navCtrl.navigateForward('tab3');
  }

}