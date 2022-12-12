import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Perfil } from 'src/app/enums/perfil.enum';
import { Cargos } from 'src/app/models/cargos';
import { CargosService } from 'src/app/services/cargos.service';
import { StorageService } from 'src/app/services/storage.service';


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

  public fotoUrl: string = '';
  public isLoadUpload: boolean = false;

  constructor(
    private funcionarioService: FuncionarioService,
    private storageService: StorageService,
    private cargoService: CargosService,
    formBuilder: FormBuilder,
    private router: Router) {

    this.formFuncionario = formBuilder.group({
      nome: ["", [Validators.required]],
      cpf: ["", [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required]],
      perfil: ["", [Validators.required]],
      foto: '',
      cargo: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.initializePerfil();
    this.initializeCargos();
  }


  private initializePerfil(): void {
    this.perfils.push(Perfil.ADMIN, Perfil.FUNCIONARIO)

  }

  public initializeCargos(): void {
    this.cargoService.findAll().subscribe(cargos => {
      this.cargos = cargos
    })

  }



  public create(): void {
    if (this.formFuncionario.valid) {
      const funcionario: Funcionario = this.formFuncionario.value;
      funcionario.foto = this.fotoUrl;
      this.funcionarioService.create(funcionario).subscribe(() => {
        this.router.navigate(["/funcionarios"]);
        alert("Funcionário cadastrado.");

      });
    } else {
      alert("Dados inválidos.");
    }
  }


  public uploadFile(event: any): void {
    this.isLoadUpload = true;
    const file: File = event.target.files[0];
    this.storageService.uploadFoto(file).subscribe(uploadResult => {
      this.isLoadUpload = false;
      const storageReference = uploadResult.ref;
      const promiseFileUrl = storageReference.getDownloadURL();
      promiseFileUrl.then((fotoUrl: string) => {
        this.fotoUrl = fotoUrl;

      })
    });
  }

}
