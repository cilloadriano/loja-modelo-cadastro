import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { ClienteModel } from '../../shared/models/cliente-model';
import { Observable } from "rxjs";



@Injectable(
  {
    providedIn: "root"
  }
)


export class ClienteService {

  public getClientes(): Observable<ClienteModel[]> {
    return this.httpClient.get<ClienteModel[]>(`${this.baseURL}/cliente`);
  }

  constructor(private httpClient: HttpClient) {

  }
  private readonly baseURL = environment["endPoint"];


  //buscas
  findById(id: Number): Observable<ClienteModel> {
    const url = `${this.baseURL}/cliente/${id}`
    return this.httpClient.get<ClienteModel>(url);
  }

  findByName(nome: String): Observable<ClienteModel[]> {
    const url = `${this.baseURL}/cliente/name/${nome}`
    return this.httpClient.get<ClienteModel[]>(url);
  }



  //Services CRUD
  create(cliente: ClienteModel): Observable<ClienteModel> {
    const url = this.baseURL + "/cliente"
    return this.httpClient.post<ClienteModel>(url, cliente);
  }

  delete(id: Number): Observable<void> {
    const url = `${this.baseURL}/cliente/${id}`
    return this.httpClient.delete<void>(url)
  }

  update(cliente: ClienteModel): Observable<ClienteModel> {
    const url = `${this.baseURL}/cliente/${cliente.id}`
    return this.httpClient.put<ClienteModel>(url, cliente)
  }

  //End Servicer CRUD
}