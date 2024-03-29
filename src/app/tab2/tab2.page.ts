import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlunoService } from 'src/services/domain/Aluno.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public navCtrl: NavController,
    public alunoService: AlunoService,
    ) {}

    ionViewDidLoad() {
      this.alunoService.findAll()
      .subscribe(response => {
        console.log(response);
      });
      error => {
        console.log(error);
      }
    }

    showInfo() {
      this.navCtrl.navigateForward('monitorias-list');
    }

    showEletro() {
      this.navCtrl.navigateForward('monitorias-list-eletro');
    }
}