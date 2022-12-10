import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Perfil } from 'src/app/enums/perfil.enum';
import { Cargos } from 'src/app/models/cargos';
import { CargosService } from 'src/app/services/cargos.service';


@Component({
  selector: 'app-new-funcionarios',
  templateUrl: './new-funcionarios.component.html',
  styleUrls: ['./new-funcionarios.component.css']
})
export class NewFuncionariosComponent implements OnInit {

  public formFuncionario: FormGroup;

  public funcionario: Funcionario[] = [];

  public perfils: Perfil[] = [];

  public cargos: Cargos[] = [];

  constructor(
    formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService,
    private router: Router, 
    private cargoService : CargosService) {
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
    this.cargoService.findAll().subscribe(cargos => {
      this.cargos = cargos
    })
    
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


