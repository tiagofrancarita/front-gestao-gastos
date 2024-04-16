import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private dataSource = new BehaviorSubject<Gasto[]>([]);
  data$ = this.dataSource.asObservable();

  constructor() { }

  setData(data: Gasto[]) {
    this.dataSource.next(data);
  }

  getData() {
    return this.data$;
  }
}

export interface Gasto {
  idGastos: number;
  numeroCartao: string;
  dataCompra: Date;
  valorTotal: number;
  parcelado: boolean;
  quantidadeParcela: number;
  valorParcela: number;
  usuario: string;
}