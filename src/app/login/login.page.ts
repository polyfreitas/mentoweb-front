import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  showTab1() {
  this.navCtrl.navigateForward('tab1');
 }

 showRegister() {
  this.navCtrl.navigateForward('register');
 }
}
