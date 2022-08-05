import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Credenciais } from 'src/models/credenciais';

@Component({

  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  // creds: Credenciais = {
  //   nome:'',
  //   email:'',
  //   curso:'',
  //   senha:'',
  // }

  public fGroup: FormGroup;

  constructor(
    public fBuilder: FormBuilder) {

    this.fGroup = this.fBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(90)]],
      email: ['', [Validators.required, Validators.email]],
      Senha: ['', [Validators.required]],
      curso: [null, [Validators.required]]
    });
  }


  singupUser() {
    console.log("enviou o formulário")
  }

  ngOnInit() {
  }

}
