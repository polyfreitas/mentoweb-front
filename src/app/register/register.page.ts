import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  formGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        Nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(90)]],
        email: ['', [Validators.required, Validators.email]],
        Senha: ['',[Validators.required]],
        curso: [null, [Validators.required]]
      });
  }

  singupUser() {
    console.log("enviou o formulário")
  }

  ngOnInit() {
  }

}
