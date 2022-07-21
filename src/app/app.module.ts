import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from 'src/services/auth.service';
import { DisciplinaService } from 'src/services/domain/Disciplina.service';
import { StorageService } from 'src/services/storage.service';
import { AlunoService } from 'src/services/domain/Aluno.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule],

    bootstrap: [AppComponent],
    
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    DisciplinaService,
    AuthService,
    StorageService,
    AlunoService
  ]
})
export class AppModule {}