import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PagamentoDto } from 'src/dtos/pagamento.dto';
import { Repository } from 'typeorm';
import { PagamentoEntity } from '../entity/pagamento.entity';

@Injectable()
export class PagamentoRepository {
  constructor(
    @InjectRepository(PagamentoEntity)
    protected pagamentoRepository: Repository<PagamentoEntity>,
  ) {}

  async insert(pagamento: PagamentoDto) {
    const pgto = this.pagamentoRepository.create({ data: pagamento.data });
    return this.pagamentoRepository.save(pgto);
  }
}
