import { Body, Controller, Post } from '@nestjs/common';
import { CieloService } from './cielo.service';
import { PagamentoDto } from 'src/dtos/pagamento.dto';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';

@Controller('cielo')
export class CieloController {
  constructor(private readonly cieloService: CieloService) {}
  @ApiProperty({
    description: 'Atualiza cidades da tabela endereco.jmr_cidades',
    type: PagamentoDto,
  })
  @ApiResponse({
    status: 201,
  })
  @Post()
  setPagamento(@Body() pagamento: PagamentoDto) {
    return this.cieloService.setPagamento(pagamento);
  }
}
