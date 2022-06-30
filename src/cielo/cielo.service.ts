import { Inject } from '@nestjs/common';
import { PagamentoRepository } from 'src/database/repository/pagamento.repository';
import { PagamentoDto } from 'src/dtos/pagamento.dto';
export class CieloService {
  constructor(
    @Inject(PagamentoRepository)
    private pagamentoRepository: PagamentoRepository,
  ) {}

  async setPagamento(pagamento: PagamentoDto) {
    return this.pagamentoRepository.insert(pagamento);
  }
}
