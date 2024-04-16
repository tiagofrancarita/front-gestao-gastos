import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataServiceService } from '../data-service.service';


// Defina a interface Gasto no próprio componente
interface Gasto {
  idGastos: number;
  numeroCartao: string;
  dataCompra: Date;
  valorTotal: number;
  parcelado: boolean;
  quantidadeParcela: number;
  valorParcela: number;
  usuario: string;
}


@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {
  displayedColumns: string[] = ['idGastos', 'numeroCartao', 'dataCompra', 'valorTotal', 'parcelado', 'quantidadeParcela', 'valorParcela', 'usuario'];
  dataSource: Gasto[] = [
    { idGastos: 1, numeroCartao: '1234', dataCompra: new Date(), valorTotal: 100, parcelado: false, quantidadeParcela: 0, valorParcela: 0, usuario: 'usuario1' },
    { idGastos: 2, numeroCartao: '5678', dataCompra: new Date(), valorTotal: 150, parcelado: true, quantidadeParcela: 3, valorParcela: 50, usuario: 'usuario2' },
    { idGastos: 3, numeroCartao: '9012', dataCompra: new Date(), valorTotal: 200, parcelado: false, quantidadeParcela: 0, valorParcela: 0, usuario: 'usuario3' },
    // Adicione mais dados aqui conforme necessário
  ];
}