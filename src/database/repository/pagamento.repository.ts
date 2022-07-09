import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPagamento } from 'src/core/pagamento/pagamento.interface';
import { Repository } from 'typeorm';
import { PagamentoEntity } from '../entity/pagamento.entity';

@Injectable()
export class PagamentoRepository {
  constructor(
    @InjectRepository(PagamentoEntity)
    protected pagamentoRepository: Repository<PagamentoEntity>,
  ) {}

  async insert(pagamento: IPagamento) {
    const pgto = this.pagamentoRepository.create({
      valor: pagamento.amount,
      nomeCartao: pagamento.cartao.holder,
      parcelas: pagamento.installments,
      numeroCartao: pagamento.cartao.cardNumber,
    });
    return this.pagamentoRepository.save(pgto);
  }

  async salvaRetorno(retorno: any) {
    return this.pagamentoRepository.save({
      id_pagamento: retorno.data.MerchantOrderId,
      statusPgto: retorno.data.Payment.ReturnCode,
      statusPgtoDesc: retorno.data.Payment.ReturnMessage,
    });
  }
}
