import { Router } from '@angular/router';
import { ClienteService } from './../../../services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/enums/perfil.enum';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {

  public formCliente: FormGroup;
  public  hide: boolean = true;


  constructor(
    formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private notification: NotificationService,
    private router: Router
  ) {
    this.formCliente = formBuilder.group({
      nome: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      cpf: ["", [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      telefone: ["", [Validators.required]],
      perfil: Perfil.CLIENTE,
      senha: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public create(): void {
    if(this.formCliente.valid) {
      const cliente: Cliente = this.formCliente.value;
      this.clienteService.create(cliente).subscribe(response => {
        this.notification.showSuccess("SUCESSO!!!", "Cliente cadastrado com sucesso!");
        this.router.navigate(["/clientes"]);
      });
    }
    else {
      this.notification.showError("ERRO!!!", "Dados inválidos.");
    }
  }
}
