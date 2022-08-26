import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ClienteDetalheComponent } from './pages/clientes/cliente-detalhe/cliente-detalhe.component';
import { ClienteCadastroComponent } from './pages/clientes/cliente-cadastro/cliente-cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutoDetalheComponent } from './pages/produtos/produto-detalhe/produto-detalhe.component';
import { ProdutoCadastroComponent } from './pages/produtos/produto-cadastro/produto-cadastro.component';


const routes: Routes = [
  { 
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "cliente-cadastro", component: ClienteCadastroComponent },
  { path: "cliente-cadastro/:id", component: ClienteCadastroComponent },
  { path: "cliente-detalhe", component: ClienteDetalheComponent },
  { path: "produto-cadastro", component: ProdutoCadastroComponent },
  { path: "produto-detalhe", component: ProdutoDetalheComponent },
  { path : "produto-cadastro/:id", component: ProdutoCadastroComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
