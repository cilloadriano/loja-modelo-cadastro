import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ClienteModel } from "src/app/shared/models/cliente-model";
import { FormBuilder, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ClienteService } from "src/app/core/service/cliente-service";

@Component({
 
  selector: "app-cliente-cadastro",
  templateUrl: "./cliente-cadastro.component.html",
  styleUrls: ["./cliente-cadastro.component.scss"],
})
export class ClienteCadastroComponent implements OnInit {
  
  public cliente: ClienteModel = new ClienteModel(0, "", "", 0, 0);
  
  nomecliente: string = ""
  enderecocliente: string = ""
  limiteCredito: number = 0
  limiteParcela: number = 0
  formgroup: any

  constructor(
    private router: Router,
    public ClienteService: ClienteService,
    private route: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
    private fB: FormBuilder
  ) {
    this.formgroup = this.fB.group({
      nomecliente: new FormControl(),
      enderecocliente: new FormControl(),
      limiteParcela: new FormControl(),
      limiteCredito: new FormControl()
    })

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      if (data.has('id')) {
        let id = <any>data.get('id') || undefined
        this.verificarIdCliente(id)
        console.log(data);
      }
    })
  }

  //verificar Cliente Existente
  verificarIdCliente(id?: number) {
    if (id) {
      this.ClienteService.findById(id).subscribe(valor => {
        console.log(valor)
        this.cliente.id = valor.id
        this.formgroup.setValue({
          nomecliente: valor.nomeCli,
          enderecocliente: valor.endCli,
          limiteCredito: valor.limiteCred,
          limiteParcela: valor.limiteParc
        })
        this._cdr.detectChanges()
      })
    }
  }


  //create
  create(): void {
    if (this.cliente.id) {
      this.cliente.nomeCli = this.formgroup.get('nomecliente').value
      this.cliente.endCli = this.formgroup.get('enderecocliente').value
      this.cliente.limiteCred = this.formgroup.get('limiteCredito').value
      this.cliente.limiteParc = this.formgroup.get('limiteParcela').value
      this.ClienteService.update(this.cliente).subscribe(() => { this.router.navigateByUrl('/cliente-detalhe') })
    }
    else {
      console.log('dado:', this.cliente);
      this.ClienteService.create(this.cliente).subscribe(
        (data) => {
          console.log(data);
          this.getClienteLista();
          console.log(this.cliente)
          this.router.navigateByUrl('/cliente-detalhe');
        },
        (error) => console.log(error)
      );

    }
  }
  getClienteLista() {
    this.router.navigate(["/Cliente"]);
  }
}
