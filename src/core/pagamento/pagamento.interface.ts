import { Cartao } from './cartao';
import { Request } from '../request';

export interface IPagamento {
  merchantOrderId: string;
  type: string;
  amount: number;
  cartao: Cartao;
  installments: number;

  realizaPagamento();

  criaBodyRequisicao();
}

export abstract class Pagamento implements IPagamento {
  merchantOrderId: string;
  type: string;
  amount: number;
  cartao: Cartao;
  installments: number;

  async realizaPagamento() {
    const request = new Request(
      process.env.API_TRANSACIONAL + '1/sales',
      'POST',
      {
        MerchantId: process.env.MERCHANT_ID,
        MerchantKey: process.env.MERCHANT_KEY,
      },
    );
    const body = this.criaBodyRequisicao();
    return request.send(body);
  }

  abstract criaBodyRequisicao();

  async getPagamento(): Promise<any> {
    const request = new Request(
      process.env.API_CONSULTA + '1/sales/' + this.merchantOrderId,
      'GET',
      {
        MerchantId: process.env.MERCHANT_ID,
        MerchantKey: process.env.MERCHANT_KEY,
      },
    );
    return request.send(null);
  }
}
