import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {
  constructor(
    public auth: AuthService
  ) {}

}

