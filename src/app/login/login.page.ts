import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/Credenciais.dto';
import { AuthService } from 'src/services/auth.service';

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

  constructor(
    public navCtrl: NavController,
    public auth: AuthService) {

  }

  login() {
    this.auth.authenticate(this.creds)
    .subscribe(response =>{
      this.auth.successfulLogin(response.headers.get('Authorization'));
      this.navCtrl.navigateForward('tab1');
    },
    error => {});
 }

 showRegister(): void {
  this.navCtrl.navigateForward('register');
 }
}