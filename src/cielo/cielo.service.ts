import { Inject } from '@nestjs/common';
import { PagamentoRepository } from 'src/database/repository/pagamento.repository';
import { IPagamento } from 'src/core/pagamento/pagamento.interface';
import { Pagamento } from 'src/core/pagamento/pagamento.interface';
export class CieloService {
  constructor(
    @Inject(PagamentoRepository)
    private pagamentoRepository: PagamentoRepository,
  ) {}

  async setPagamento(pagamento: IPagamento) {
    //salva no sqlite
    const pgto = await this.pagamentoRepository.insert(pagamento);
    pagamento.merchantOrderId = pgto.id_pagamento;
    //envia para cielo
    const response = await pagamento.realizaPagamento();
    //salva no sqlite retorno cielo
    this.pagamentoRepository.salvaRetorno(response);

    return response.data;
  }

  async getPagamento(pagamento: Pagamento) {
    return (await pagamento.getPagamento()).data;
  }
}
