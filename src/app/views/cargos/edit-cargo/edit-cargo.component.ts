
import { CargosService } from './../../../services/cargos.service';
import { Cargos } from './../../../models/cargos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-cargo',
  templateUrl: './edit-cargo.component.html',
  styleUrls: ['./edit-cargo.component.css']
})
export class EditCargoComponent implements OnInit {

 //spinner: boolean = true;
 
  public cargos: Cargos = {
    idCargo: NaN,
    nome: '',
    descricao: '',
    salario: NaN
  };

  constructor(
    private CargosService: CargosService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.initializeCargos();
  }

  private initializeCargos(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id != null) {
      this.CargosService.findById(id).subscribe(cargos => {
        this.cargos = cargos;
      }
      );
    }
  }

public update(formEdit: NgForm): void {
  if(formEdit.valid) {
    this.CargosService.update(this.cargos).subscribe(cargos => {
      alert("Cargo editado.");
      this.router.navigate(["/cargos"]);
    });
  }
  else {
    alert("Dados inválidos.");
  }
}

}