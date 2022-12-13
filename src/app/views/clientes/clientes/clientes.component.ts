import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { delay } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesClienteComponent } from 'src/app/components/detalhes-cliente/detalhes-cliente.component';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'editar', 'excluir', 'detalhesCliente'];
  dataSource: Cliente[] = [];

  
  constructor(private clienteService: ClienteService,
    private dialogo: MatDialog
) { }

  spinner: boolean = true;

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    setTimeout(()=>
      this.clienteService.findAll().subscribe(cliente => {
        this.dataSource = cliente;
        this.spinner = false;
        
      }),500);
  }

  public delete(id: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.clienteService.delete(id).subscribe(() => {
        alert("Cliente excluido.");
        this.initializeTable();
      });
    }
  }

  public detalhesCliente(cliente: Cliente): void{
    this.dialogo.open(DetalhesClienteComponent,{
      width: "350px",
      data: cliente
    })
  }
  
  
}
