import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/shared/models/cliente-model';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/core/service/cliente-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.scss']
})

export class ClienteDetalheComponent implements OnInit {

  clientes: ClienteModel[] = [];
  cliente: ClienteModel = new ClienteModel(0, '', '', 0, 0)
  campoProcura: FormControl = new FormControl('')


  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) {
    clienteService.getClientes().subscribe(
      (value: ClienteModel[]) => {
        console.log(value);
        this.clientes = value;
      }
      , error => {

      }
      , () => {

      }
    );
  }

  ngOnInit(): void {
  }

  findById(): void {
    if (this.cliente && this.cliente.id) {
      this.clienteService.findById(this.cliente.id!).subscribe((resposta) => {
        this.cliente.nomeCli = resposta.nomeCli
        this.cliente.endCli = resposta.endCli
        this.cliente.limiteCred = resposta.limiteCred
        this.cliente.limiteParc = resposta.limiteParc
      })
    }
  }

  findByName(): void {

    this.clienteService.findByName(this.campoProcura.value).subscribe((resposta) => {
      this.clientes = resposta
      console.log(this.cliente)
    })
  }


  private getClientes() {
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  delete(id: number) {
    this.clienteService.delete(id).subscribe(data => {
      this.getClientes();
    })
  }

  update(cliente: ClienteModel) {
    this.router.navigateByUrl('/cliente-cadastro/' + cliente.id)
  }
}
