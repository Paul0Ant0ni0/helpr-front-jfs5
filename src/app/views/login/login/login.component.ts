import { Credenciais } from './../../../models/credenciais';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public  hide: boolean = true;

  constructor(
    formBuilder: FormBuilder,
    private notification: NotificationService,
    private authService: AuthService,
    private router: Router
  ) {
    this.formLogin = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public signIn(): void {
    if (this.formLogin.valid) {
      // PROCESSO DE AUTENTICAR
      const credenciais: Credenciais = this.formLogin.value;
      this.authService.authenticate(credenciais).subscribe(response => {
        localStorage.setItem("email", credenciais.email)
        this.notification.showSuccess("SUCESSO!!", "Bem-vindo(a)!");
        this.router.navigate(["/home"]);
      });
    }
    else {
      this.notification.showError("ERRO!!!", "Dados inválidos.");
    }
  }


}
