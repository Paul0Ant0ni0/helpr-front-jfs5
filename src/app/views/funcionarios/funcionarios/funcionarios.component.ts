import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'foto', 'editar', 'excluir'];
  dataSource: Funcionario[] = [];

  constructor(
    private funcionarioService: FuncionarioService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  //Adicionado o método findAll
  private initializeTable(): void {
    this.funcionarioService.findAll().subscribe(funcionarios => {
      this.dataSource = funcionarios;
    });
  }



  public delete(id: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.funcionarioService.delete(id).subscribe(() => {
        this.notificationService.showSuccess("SUCESSO!!!", "Funcionário excluido.");
        this.initializeTable();
      });
    }
  }

}


