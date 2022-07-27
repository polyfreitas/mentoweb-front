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

showTab1() {
this.navCtrl.navigateForward('tab1');
}

showTab3() {
this.navCtrl.navigateForward('tab3');
  }

}