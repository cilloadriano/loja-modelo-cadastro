import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './core/header/header.component';
import { CommonModule } from '@angular/common';
import { ClienteCadastroComponent } from 'src/app/pages/clientes/cliente-cadastro/cliente-cadastro.component'
import { ProdutoCadastroComponent } from './pages/produtos/produto-cadastro/produto-cadastro.component';
import { ClienteDetalheComponent } from './pages/clientes/cliente-detalhe/cliente-detalhe.component';
import { ProdutoDetalheComponent } from './pages/produtos/produto-detalhe/produto-detalhe.component';

import { HomeComponent } from './pages/home/home.component'
import { ClienteService } from './core/service/cliente-service';

const clienteRoutes: Routes =[
  {
      path : 'cliente',
      component: ClienteCadastroComponent
  },
  {
      path : 'clientesdetalhes',
      component: ClienteDetalheComponent
  },
  {
      path : 'clientessetalhes/:id',
      component: ClienteDetalheComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProdutoCadastroComponent,
    ProdutoDetalheComponent,
    ClienteCadastroComponent,
    ClienteDetalheComponent,
    HomeComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  exports: [RouterModule, ClienteDetalheComponent],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }