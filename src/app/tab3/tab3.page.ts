import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ToastController, ToastOptions } from '@ionic/angular';
import { AlunoDTO } from 'src/models/Aluno.dto';
import { AuthService } from 'src/services/auth.service';
import { AlunoService } from 'src/services/domain/Aluno.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  Aluno: AlunoDTO;
  toastOptions: ToastOptions;

  constructor(
    public router: Router,
    public navCtrl: NavController,
    public storage: StorageService,
    public alunoService: AlunoService,
    public authService: AuthService,
    public alertCtrl: AlertController,
    public toast: ToastController,
  ) {

    this.toastOptions = {
      message: 'Logout realizado com sucesso',
      duration: 7000
    }

  }


  async logout() {
    this.router.navigate(['login']);
    this.authService.logout();
    (await this.toast.create(this.toastOptions)).present();
  }
}
