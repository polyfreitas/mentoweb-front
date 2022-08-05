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
      'inbox': [''],
      'password': ['']
    })
  }

  ngOnInit(): void {}

  logar() {
    
  }

  validaCampos(): boolean {
    if (this.email.valid && this.senha.valid) {
      return true;
    }
    else {
      return false;
    }
  }

}
