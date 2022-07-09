import { Cartao } from './cartao';
import { Pagamento } from './pagamento.interface';
import { Request } from '../request';
export class Debito extends Pagamento {
  merchantOrderId: string;
  type: string;
  amount: number;
  cartao: Cartao;
  installments: number;
  returnUrl: string;

  constructor(type: string, amount: number, cartao: Cartao) {
    super();
    this.amount = amount;
    this.cartao = cartao;
    this.type = type;
    this.installments = 1;
    this.returnUrl = 'http://www.google.com.br';
  }

  criaBodyRequisicao() {
    return {
      MerchantOrderId: this.merchantOrderId,
      Payment: {
        Type: 'DebitCard',
        Amount: this.amount,
        Provider: 'Simulado',
        ReturnUrl: this.returnUrl,
        DebitCard: {
          CardNumber: this.cartao.cardNumber,
          Holder: this.cartao.holder,
          ExpirationDate: this.cartao.expirationDate,
          SecurityCode: this.cartao.securityCode,
          Brand: this.cartao.brand,
        },
      },
    };
  }
}
