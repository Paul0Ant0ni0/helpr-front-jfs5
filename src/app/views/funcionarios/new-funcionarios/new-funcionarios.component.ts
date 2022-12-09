import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Perfil } from 'src/app/enums/perfil.enum';


@Component({
  selector: 'app-new-funcionarios',
  templateUrl: './new-funcionarios.component.html',
  styleUrls: ['./new-funcionarios.component.css']
})
export class NewFuncionariosComponent implements OnInit {

  public formFuncionario: FormGroup;

  public funcionario: Funcionario[] = [];

  public perfils: Perfil[] = [];

  public cargos: any[] = [];

  constructor(
    formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService,
    private router: Router) {
    this.formFuncionario = formBuilder.group({
      nome: ["", [Validators.required]],
      cpf: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required]],
      perfil: ["", [Validators.required]],
      foto: "",
      cargo: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.initializePerfil();
    this.initializeCargos();
  }


  private initializePerfil(): void {
    this.perfils = Object.values(Perfil)

  }

  public initializeCargos(): void{
    this.cargos.push(
      {
        idCargo: 1,
        nome: "Diretor Geral",
        descricao: "Gerencia a empresa",
        salario: 30000.0
      },
      {
        idCargo: 3,
        nome: "Técnico Geral",
        descricao: "Resolve os chamados urgentes",
        salario: 12000.0
      }

    )
  }



  public create(): void {
    if (this.formFuncionario.valid) {
      const funcionario: Funcionario = this.formFuncionario.value;
      this.funcionarioService.create(funcionario).subscribe(() => {
        this.router.navigate(["/funcionarios"]);
        setTimeout(()=> {
          alert("Funcionário cadastrado.");
        },2000)
        
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }


}


