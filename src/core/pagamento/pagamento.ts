import { Pagamento } from './pagamento.interface';

export class PagamentoDefault extends Pagamento {
  constructor(idPagamento: string) {
    super();
    this.merchantOrderId = idPagamento;
  }
  criaBodyRequisicao() {
    throw new Error('Method not implemented.');
  }
}
