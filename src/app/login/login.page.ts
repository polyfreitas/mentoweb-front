import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController) {

  }

  showTab1() {
  console.log(this.creds);
  this.navCtrl.navigateForward('tab1');
 }

 showRegister() {
  this.navCtrl.navigateForward('register');
 }
}
