import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-perfil-funcionario',
  templateUrl: './perfil-funcionario.component.html',
  styleUrls: ['./perfil-funcionario.component.css']
})
export class PerfilFuncionarioComponent implements OnInit {

  public usuario: Funcionario;

  constructor() {
    const db = localStorage.getItem("usuario") as string;
    const data = JSON.parse(db);
    this.usuario = data;
   }

  ngOnInit(): void {
  }

}
