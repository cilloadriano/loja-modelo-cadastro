import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { ProdutoModel } from '../../shared/models/produto-model';
import { Observable } from "rxjs";



@Injectable(
  {
    providedIn: "root"
  }
)


export class ProdutoService {

  public getProdutos(): Observable<ProdutoModel[]> {
    return this.httpClient.get<ProdutoModel[]>(`${this.baseURL}/produto`);
  }

  constructor(private httpClient: HttpClient) {

  }
  private readonly baseURL = environment["endPoint"];


  //buscas
  findById(id: Number): Observable<ProdutoModel> {
    const url = `${this.baseURL}/produto/${id}`
    return this.httpClient.get<ProdutoModel>(url);
  }

  findByName(nome: String): Observable<ProdutoModel[]> {
    const url = `${this.baseURL}/produto/name/${nome}`
    return this.httpClient.get<ProdutoModel[]>(url);
  }



  //Services CRUD
  create(produto: ProdutoModel): Observable<ProdutoModel> {
    const url = this.baseURL + "/produto"
    return this.httpClient.post<ProdutoModel>(url, produto);
  }

  delete(id: Number): Observable<void> {
    const url = `${this.baseURL}/produto/${id}`
    return this.httpClient.delete<void>(url)
  }

  update(produto: ProdutoModel): Observable<ProdutoModel> {
    const url = `${this.baseURL}/produto/${produto.id}`
    return this.httpClient.put<ProdutoModel>(url, produto)
  }

  //End Servicer CRUD
}