import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NavController, NavCustomEvent } from '@ionic/angular';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = new FormControl(null, Validators.email)
  senha = new FormControl(null, Validators.minLength(3))

  public fGroup: FormGroup;

  constructor(
    public auth: AuthService,
    public navCtrl: NavController,
    public fBuilder: FormBuilder) {
    this.fGroup = this.fBuilder.group({
      'email': [this.email, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(80),
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ])],
      'senha': [this.senha, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ])]
    });
  }

  ngOnInit(): void { }


  logar() {
    if(this.fGroup.valid) {
      this.auth.authenticate(this.fGroup.value).subscribe(res => console.log(res))
    }
  }

  validaCampos(): boolean {
    return (this.email.valid && this.senha.valid)
  }

  showRegister() {
    this.navCtrl.navigateForward('register');
  }

}
