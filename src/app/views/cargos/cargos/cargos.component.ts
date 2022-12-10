import { CargosService } from './../../../services/cargos.service';
import { Cargos } from './../../../models/cargos';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome','descricao', 'salario' , 'editar', 'excluir'];
  dataSource: Cargos[] = [];

  spinner: boolean = true;

  constructor(private CargosService: CargosService) { }

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
}
