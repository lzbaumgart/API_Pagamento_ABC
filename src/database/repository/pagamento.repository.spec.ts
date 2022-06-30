import { PagamentoRepository } from './pagamento.repository';

describe('PagamentoRepository', () => {
  it('should be defined', () => {
    expect(new PagamentoRepository()).toBeDefined();
  });
});
