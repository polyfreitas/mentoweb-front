import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import _ from 'lodash';

@Component({
  selector: 'app-monitorias-list-eletro',
  templateUrl: './monitorias-list-eletro.page.html',
  styleUrls: ['./monitorias-list-eletro.page.scss'],
})
export class MonitoriasListEletroPage {

  disciplinas: Array<{nome: string, id: string}>;
  allMonitorias: any;
  public monitoriasEletro;
  queryText: string;

  constructor(
    public navCtrl: NavController) {
    this.queryText = '';
    this.monitoriasEletro = [
      { nome: 'Lingua Portuguesa e literatura Brasileira 1', id: 80 },
      { nome: 'Matemática 1', id: 81 },
      { nome: 'Física 1', id: 82 },
      { nome: 'Educação Física 1', id: 83 },
      { nome: 'Ling. Estrang.Moderna Inglês 1', id: 84 },
      { nome: 'Geografia 1', id: 85 },
      { nome: 'Filosofia 1', id: 86 },
      { nome: 'Sociologia 1', id: 87 },
      { nome: 'Eletricidade CC', id: 88 },
      { nome: 'Desenho Técnico e CAD', id: 89 },
      { nome: 'Informática Aplicada', id: 90 },
      { nome: 'Lingua Portuguesa e literatura Brasileira 2', id: 91 },
      { nome: 'Matemática 2', id: 92 },
      { nome: 'Física 2', id: 93 },
      { nome: 'Educação Física 2', id: 94 },
      { nome: 'Ling. Estrang.Moderna Inglês 2', id: 95 },
      { nome: 'Geografia 2', id: 96 },
      { nome: 'Filosofia 2', id: 97 },
      { nome: 'Sociologia 2', id: 98 },
      { nome: 'Biologia 1', id: 99 },
      { nome: 'Quimica 1', id: 100 },
      { nome: 'Eletricidade CA', id: 101 },
      { nome: 'Instalações Elétricas Prediais', id: 102 },
      { nome: 'Lingua Portuguesa e literatura Brasileira 3', id: 103 },
      { nome: 'Matemática 3', id: 104 },
      { nome: 'Física 3', id: 105 },
      { nome: '	Educação Física 3', id: 106 },
      { nome: 'Ling. Estrang.Moderna Inglês 3', id: 107 },
      { nome: 'Geografia 3', id: 108 },
      { nome: 'Filosofia 3', id: 109 },
      { nome: 'Sociologia 3', id: 110 },
      { nome: 'Biologia 2', id: 111 },
      { nome: 'Quimica 2', id: 112 },
      { nome: 'História 1', id: 113 },
      { nome: 'Arte 1', id: 114 },
      { nome: 'Eletrônica Geral 1', id: 115 },
      { nome: 'Conversão de Energia', id: 116 },
      { nome: 'Eletrônica Digital', id: 117 },
      { nome: 'Redação e Metodologias Científicas', id: 118 },
      { nome: 'Lingua Portuguesa e literatura Brasileira 4', id: 119 },
      { nome: 'Matemática 4', id: 120 },
      { nome: 'Física 4', id: 121 },
      { nome: 'Educação Física 4', id: 122 },
      { nome: 'Ling. Estrang.Moderna Inglês 4', id: 123 },
      { nome: 'Geografia 4', id: 124 },
      { nome: 'Filosofia 4', id: 125 },
      { nome: 'Sociologia 4', id: 126 },
      { nome: 'Biologia 3', id: 127 },
      { nome: 'Quimica 3', id: 128 },
      { nome: 'História 2', id: 129 },
      { nome: 'Arte 2', id: 130 },
      { nome: 'Eletrônica Geral 2', id: 131 },
      { nome: 'Máquinas Elétricas e Acionamentos 1', id: 132 },
      { nome: 'Lingua Portuguesa e literatura Brasileira 5', id: 133 },
      { nome: 'Matemática 5', id: 134 },
      { nome: 'Física 5', id: 135 },
      { nome: 'Educação Física 5', id: 136 },
      { nome: 'Biologia 4', id: 137 },
      { nome: 'Quimica 4', id: 138 },
      { nome: 'História 3', id: 139 },
      { nome: 'Comandos Elétricos', id: 140 },
      { nome: 'Máquinas Elétricas e Acionamentos 2', id: 141 },
      { nome: 'Elétronica de Potência', id: 142 },
      { nome: 'Sistemas Microcontrolados', id: 143 },
      { nome: 'Pneumática e Hidráulica', id: 144 },
      { nome: 'Empreendedorismo e inovação', id: 145 },
      { nome: 'Lingua Portuguesa e literatura Brasileira 6', id: 146 },
      { nome: 'Matemática 6', id: 147 },
      { nome: 'Física 6', id: 148 },
      { nome: 'História 4', id: 149 },
      { nome: 'Instalações Elétricas Industriais', id: 150 },
      { nome: 'Geração, Transmissão e Distribuição Elétrica', id: 151 },
      { nome: 'Instrumentação e Controle', id: 152 },
      { nome: 'Acionamentos Especiais', id: 153 },
      { nome: 'Acionamento  Eletropneumático e Eletrohidráulico', id: 154 },
      { nome: 'Automação Industrial', id: 155 },
      { nome: 'Estátistica', id: 156 },
      { nome: 'Segurança do Trabalho', id: 157 },
      { nome: 'Meio Ambiente e Energias Renováveis', id: 158 },
    ]; 

    this.allMonitorias = this.monitoriasEletro;

  }

  filterDisciplina(mon: any){
    let val = mon.target.value;
    if (val && val.trim() != ''){
      this.monitoriasEletro = _.values(this.allMonitorias);
      this.monitoriasEletro = this.monitoriasEletro.filter((monitoriasEletro) => {
        return (monitoriasEletro.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
  } else {
    this.monitoriasEletro = this.allMonitorias;
  }

  }
}