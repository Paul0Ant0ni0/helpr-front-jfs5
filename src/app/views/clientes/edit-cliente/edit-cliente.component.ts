import { ClienteService } from './../../../services/cliente.service';
import { Cliente } from './../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  public cliente: Cliente = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: ''
  };

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private notification: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initilizeFields();
  }

  private initilizeFields(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.clienteService.findById(id).subscribe(cliente => {
        this.cliente = cliente;
      });
    }
  }

  public update(formEdit: NgForm): void {
    if(formEdit.valid) {
      this.clienteService.update(this.cliente).subscribe(() => {
        this.notification.showSuccess("SUCESSSO!!!","Cliente editado.");
        this.router.navigate(["/clientes"]);
      });
    }
    else {
      this.notification.showError("ERRO!!!", "Dados inválidos.");
    }
  }
}
