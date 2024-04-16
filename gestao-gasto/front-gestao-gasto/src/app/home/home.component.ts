import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GastosComponent } from '../gastos/gastos.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent  {

  displayedColumns: string[] = ['idGastos', 'numeroCartao', 'dataCompra', 'valorTotal', 'parcelado', 'quantidadeParcela', 'valorParcela', 'usuario'];

  dataSource = new MatTableDataSource<GastosComponent>([]); // Substitua `Gasto` pelo tipo de dados apropriado


  valorPrevistoMesAtual: number = 1000;
  valorPrevistoMesAnterior: number = 500;
  valorPrevistoMesSeguinte: number = 3000;

  constructor(private authService: AuthService, private router: Router,private _httpClient: HttpClient) { 
    this.valorPrevistoMesAtual = 1000;
    this.valorPrevistoMesAnterior = 500;
    this.valorPrevistoMesSeguinte = 3000;
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}