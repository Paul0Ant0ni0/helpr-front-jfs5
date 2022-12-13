import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/enums/perfil.enum';
import { Funcionario } from 'src/app/models/funcionario';
import { AuthService } from 'src/app/services/auth.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Cargos } from 'src/app/models/cargos'
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public theme: string = "theme-light";
  public isEmpty: boolean = true;
  public funcionario: Funcionario = {
    nome: '',
    email: '',
    cpf: '',
    foto: '',
    perfil: Perfil.ADMIN,
    cargo: {
      idCargo: NaN,
      nome: '',
      descricao: '',
      salario: NaN
    },
    senha: ''
  }

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private funcionarioService: FuncionarioService,
    private notification: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findByEmail();
    let theme = localStorage.getItem("theme")
    theme != null ? this.theme = theme : this.theme;
  }

  public logout(): void {
    this.authService.logout();
    localStorage.clear();
    this.router.navigate(['/login']);
    this.notification.showSuccess("SUCESSO!!!", "Até Logo!");
  };


  public findByEmail(): void {
    const email: string | null = localStorage.getItem("email");
    if (email != null) {
      this.usuarioService.findByEmail(email).subscribe(usuario => {
        if (usuario.perfil != Perfil.CLIENTE && usuario.id != undefined) {
          this.getFuncionario(`${usuario.id}`);
          localStorage.setItem("usuario", JSON.stringify(usuario));
        }

      });

    }
  }


  public getFuncionario(id: string): void {
    this.funcionarioService.findById(id).subscribe(funcionario => {
      this.isEmpty = false;
      this.funcionario = funcionario;
    })
  }

  @HostBinding('class')
  public get themeMode(): String {
    return this.theme == "theme-light" ? "theme-light" : "theme-dark"

  }

  public updateTheme(): void {
    this.theme == "theme-light" ? this.theme = "theme-dark" : this.theme = "theme-light"
    localStorage.setItem("theme", this.theme)

  }

}


