import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
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

  constructor(
    public navCtrl: NavController,
    public storage: StorageService,
    public alunoService: AlunoService,
    public auth: AuthService,
  ) {
  }

}