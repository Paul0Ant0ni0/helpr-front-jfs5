import { Component, OnInit } from '@angular/core';
import { Setor } from 'src/app/enums/setor.enum';
import { FuturosCandidatos } from 'src/app/models/futuros-candidatos';
import { FuturosCandidatosService } from 'src/app/services/futuros-candidatos.service';

@Component({
  selector: 'app-futuros-candidatos',
  templateUrl: './futuros-candidatos.component.html',
  styleUrls: ['./futuros-candidatos.component.css']
})
export class FuturosCandidatosComponent implements OnInit {

  public setors: Setor[] = [];

  displayedColumns: string[] = ['id', 'nomeCompleto', 'email', 'descricaoDasHabilidades', 'setor', "editar", "excluir"];
  dataSource: FuturosCandidatos[] = [];

  constructor(
    private futurosCandidatosService: FuturosCandidatosService) { }

  ngOnInit(): void {
    this.initializeTable();
  }


  private initializeTable(): void {
    this.futurosCandidatosService.findAll().subscribe(futurosCandidatos => {
      this.dataSource = futurosCandidatos;
    });
  }


  public delete(id: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if (ok) {
      this.futurosCandidatosService.delete(id).subscribe(() => {
        alert("Futuro candidato excluído.");
        this.initializeTable();
      });
    }
  }
}
