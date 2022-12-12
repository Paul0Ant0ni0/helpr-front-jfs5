import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/enums/perfil.enum';
import { Cargos } from 'src/app/models/cargos';
import { Funcionario } from 'src/app/models/funcionario';
import { CargosService } from 'src/app/services/cargos.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.css']
})
export class EditFuncionarioComponent implements OnInit {

  public perfils: Perfil[] = [];

  public cargos: Cargos[] = [];

  public fotoUrl: string = '';
  public isLoadUpload: boolean = false;

  public funcionario: Funcionario = {
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    foto: this.fotoUrl,
    cargo: {
      idCargo: NaN,
      nome: '',
      descricao: '',
      salario: NaN
    }
  };


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private storageService: StorageService,
    private cargoService: CargosService
  ) { }

  ngOnInit(): void {
    this.initilize();
    this.initializeCargos();
    this.initializePerfil();
  }

  private initializePerfil(): void {
    this.perfils.push(Perfil.ADMIN, Perfil.FUNCIONARIO)

  }

  public initializeCargos(): void {
    this.cargoService.findAll().subscribe(cargos => {
      this.cargos = cargos
    })
  }


  private initilize(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.funcionarioService.findById(id).subscribe(funcionario => {
        this.funcionario = funcionario;
        console.log(funcionario)
      });
    }
  }

  public update(formEdit: NgForm): void {
    if (formEdit.valid) {
      const funcionario: Funcionario = this.funcionario;
      funcionario.foto = this.fotoUrl;
      this.funcionarioService.update(this.funcionario).subscribe(() => {
        this.router.navigate(["/funcionario"]);
        // alert("Funcionário editado.");
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }

  public deletarFoto(): void {
    const foto: string | undefined = this.funcionario.foto;
    if (foto != undefined) {
      this.storageService.deletar(foto).subscribe(() => {
      });
    }
  }

  public uploadFile(event: any): void {
    this.isLoadUpload = true;
    this.deletarFoto();
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
