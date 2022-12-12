import { CargosService } from './../../../services/cargos.service';
import { Cargos } from './../../../models/cargos';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesComponent } from 'src/app/components/detalhes/detalhes.component';


@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario' , 'editar', 'excluir', 'detalhes'];
  dataSource: Cargos[] = [];

  spinner: boolean = true;

  constructor(private CargosService: CargosService,
    private dialogo: MatDialog,
    ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    setTimeout(()=>
      this.CargosService.findAll().subscribe(cargos => {
        this.dataSource = cargos;
        this.spinner = false;
        
      }),500)
}

public detalhes(cargos: Cargos): void{
  this.dialogo.open(DetalhesComponent,{
    width: "350px",
    data: cargos
  })
}

}
