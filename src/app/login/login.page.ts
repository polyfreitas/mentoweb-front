import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Credenciais } from 'src/models/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email)
  senha = new FormControl(null, Validators.minLength(3))

  public fGroup: FormGroup;

  constructor(public fBuilder: FormBuilder) {
    this.fGroup = this.fBuilder.group({
      'inbox': [this.email, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(80),
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ])],
      'password': [this.senha, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ])]
    });
  }

  ngOnInit(): void { }

  // COLOCAR AQUI AQUELA MENSAGEM DE ERRO AO LOGAR, MAS PRECISA DE TOAST
  // O THIS.CREDS.SENHA É PARA ESVAZIAR O CAMPO DE SENHA CASO O USUÁRIO ERRAR
  // logar() {
  //   this.toast.error('Usuário e/ou senha inválidos', 'Login')
  //   this.creds.senha = ''
  // }

  validaCampos(): boolean {
    return (this.email.valid && this.senha.valid)
  }

}
