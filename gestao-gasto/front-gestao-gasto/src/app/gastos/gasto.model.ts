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