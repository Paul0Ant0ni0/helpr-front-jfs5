import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cargos } from 'src/app/models/cargos';
import { CargosService } from 'src/app/services/cargos.service';

@Component({
  selector: 'app-new-cargo',
  templateUrl: './new-cargo.component.html',
  styleUrls: ['./new-cargo.component.css']
})
export class NewCargoComponent implements OnInit {

  public formCargos: FormGroup;

  public cargos: Cargos[] = [];

  constructor(
    formBuilder: FormBuilder,
    private cargosService: CargosService,
    private router: Router
  ) {
    this.formCargos = formBuilder.group({
      nome: ["", [Validators.required]],
      descricao: ["", [Validators.required]],
      salario: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.initializeFieldCargos();
  }

  private initializeFieldCargos(): void {
    this.cargosService.findAll().subscribe(cargos => {
      this.cargos = cargos;
    });
  }

  public create(): void {
    if(this.formCargos.valid) {
      const cargos: Cargos = this.formCargos.value;
      this.cargosService.create(cargos).subscribe(() => {
        alert("Cargo cadastrado.");
        this.router.navigate(["/cargos"]);
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }
}