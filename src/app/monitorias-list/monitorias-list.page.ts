import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import _ from 'lodash';

@Component({
  selector: 'app-monitorias-list',
  templateUrl: './monitorias-list.page.html',
  styleUrls: ['./monitorias-list.page.scss'],
})
export class MonitoriasListPage {

  public monitoriasInfo;
  allMonitorias: any;
  queryText: string;

  constructor(public navCtrl: NavController) {
    this.monitoriasInfo = [
      { nome: 'Lingua Portuguesa e literatura Brasileira 1', id: 1 },
      { nome: 'Matemática 1', id: 2 },
      { nome: 'Física 1', id: 3 },
      { nome: 'Educação Física 1', id: 4 },
      { nome: 'Ling. Estrang.Moderna Inglês 1', id: 5 },
      { nome: 'Geografia 1', id: 6 },
      { nome: 'Filosofia 1', id: 7 },
      { nome: 'Sociologia 1', id: 8 },
      { nome: 'Informática Aplicada', id: 9 },
      { nome: 'Desenvolvimento web 1', id: 10 },
      { nome: 'Algoritmos 1', id: 11 },
      { nome: 'Instalação e Manutenção de Computadores 1', id: 12 },
      { nome: 'Lingua Portuguesa e literatura Brasileira 2', id: 13 },
      { nome: 'Matemática 2', id: 14 },
      { nome: 'Física 2', id: 15 },
      { nome: 'Educação Física 2', id: 16 },
      { nome: 'Ling. Estrang.Moderna Inglês 2', id: 17 },
      { nome: 'Geografia 2', id: 18 },
      { nome: 'Filosofia 2', id: 19 },
      { nome: 'Sociologia 2', id: 20 },
      { nome: 'Biologia 1', id: 21 },
      { nome: 'Quimica 1', id: 22 },
      { nome: 'Desenvolvimento web 2', id: 23 },
      { nome: 'Algoritmos 2', id: 24 },
      { nome: 'Instalação e Manutenção de Computadores 2', id: 25 },
      { nome: 'Lingua Portuguesa e literatura Brasileira 3', id: 26 },
      { nome: 'Matemática 3', id: 27 },
      { nome: 'Física 3', id: 28 },
      { nome: 'Educação Física 3', id: 29 },
      { nome: 'Ling. Estrang.Moderna Inglês 3', id: 30 },
      { nome: 'Geografia 3', id: 31 },
      { nome: 'Filosofia 3', id: 32 },
      { nome: 'Sociologia 3', id: 33 },
      { nome: 'Biologia 2', id: 34 },
      { nome: 'Quimica 2', id: 35 },
      { nome: 'Desenvolvimento web 3', id: 36 },
      { nome: 'Arte 1', id: 37 },
      { nome: 'História 1', id: 38 },
      { nome: 'Banco de Dados 1', id: 39 },
      { nome: 'Sistemas Operacionais 1', id: 40 },
      { nome: 'Lingua Portuguesa e literatura Brasileira 4', id: 41 },
      { nome: 'Matemática 4', id: 42 },
      { nome: 'Física 4', id: 43 },
      { nome: 'Educação Física 4', id: 44 },
      { nome: 'Ling. Estrang.Moderna Inglês 4', id: 45 },
      { nome: 'Geografia 4', id: 46 },
      { nome: 'Filosofia 4', id: 47 },
      { nome: 'Sociologia 4', id: 48 },
      { nome: 'Biologia 3', id: 49 },
      { nome: 'Quimica 3', id: 50 },
      { nome: 'Desenvolvimento web 4', id: 51 },
      { nome: 'Arte 2', id: 52 },
      { nome: 'História 2', id: 53 },
      { nome: 'Banco de Dados 2', id: 54 },
      { nome: 'Sistemas Operacionais 2', id: 55 },
      { nome: 'Lingua Portuguesa e literatura Brasileira 5', id: 56 },
      { nome: 'Matemática 5', id: 57 },
      { nome: 'Física 5', id: 58 },
      { nome: 'Educação Física 5', id: 59 },
      { nome: 'Programação para Dispositivos Moveis 1', id: 60 },
      { nome: 'Redes de Computadores 1', id: 61 },
      { nome: 'Empreendedorismo e inovação 1', id: 62 },
      { nome: 'Frameworks', id: 63 },
      { nome: 'Biologia 4', id: 64 },
      { nome: 'Quimica 4', id: 65 },
      { nome: 'História 3', id: 66 },
      { nome: 'Metodologia de Pesquisa', id: 67 },
      { nome: 'Lingua Portuguesa e literatura Brasileira 6', id: 68 },
      { nome: 'Matemática 6', id: 69 },
      { nome: 'Física 6', id: 70 },
      { nome: 'Tópicos Especiais em Tecnologia da Informação', id: 71 },
      { nome: 'Programação para Dispositivos Moveis 2', id: 72 },
      { nome: 'Redes de Computadores 2', id: 73 },
      { nome: 'Empreendedorismo e inovação 2', id: 74 },
      { nome: 'Gerenciamento e configuração de Serviços de Internet', id: 75 },
      { nome: 'Produção Técnica e Cientifica', id: 76 },
      { nome: 'Comunicação Técnica', id: 77 },
      { nome: 'História 4', id: 78 },
      { nome: 'Computador, Ética e Sociedade', id: 79 },
    ];

    this.allMonitorias = this.monitoriasInfo

  }

  filterDisciplina(mon: any){
    let val = mon.target.value;
    if (val && val.trim() != ''){
      this.monitoriasInfo = _.values(this.allMonitorias);
      this.monitoriasInfo = this.monitoriasInfo.filter((monitoriasInfo) => {
        return (monitoriasInfo.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
  } else {
    this.monitoriasInfo = this.allMonitorias;
  }

  }
}
