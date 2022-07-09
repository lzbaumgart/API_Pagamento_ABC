import { Cartao } from './cartao';
import { Pagamento } from './pagamento.interface';
export class Credito extends Pagamento {
  merchantOrderId: string;
  type: string;
  amount: number;
  cartao: Cartao;
  installments: number;

  constructor(
    type: string,
    amount: number,
    cartao: Cartao,
    installments: number,
  ) {
    super();
    this.amount = amount;
    this.cartao = cartao;
    this.installments = installments;
    this.type = type;
  }
  criaBodyRequisicao() {
    return {
      MerchantOrderId: this.merchantOrderId,
      Payment: {
        Type: 'CreditCard',
        Amount: this.amount,
        Installments: this.installments,
        CreditCard: {
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
