import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CieloService } from './cielo.service';
import { PagamentoDto } from 'src/dtos/pagamento.dto';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import { IPagamento } from 'src/core/pagamento/pagamento.interface';
import { Debito } from 'src/core/pagamento/debito';
import { Credito } from 'src/core/pagamento/credito';
import { PagamentoDefault } from 'src/core/pagamento/pagamento';

@Controller('cielo')
export class CieloController {
  constructor(private readonly cieloService: CieloService) {}
  @ApiProperty({
    description: 'Realiza pagamentos via débito ou crédito.',
  })
  @ApiResponse({
    status: 201,
  })
  @Post('/pagamento')
  setCredito(@Body() pagamento: PagamentoDto) {
    let pgto: IPagamento;
    if (pagamento.modalidade == 1) {
      pgto = new Debito('DebitCard', pagamento.valor, {
        brand: pagamento.bandeira,
        cardNumber: pagamento.numeroCartao,
        expirationDate: pagamento.dataValidade,
        holder: pagamento.nomeCartao,
        securityCode: pagamento.codigoSeguranca,
      });
    } else {
      pgto = new Credito(
        'CreditCard',
        pagamento.valor,
        {
          brand: pagamento.bandeira,
          cardNumber: pagamento.numeroCartao,
          expirationDate: pagamento.dataValidade,
          holder: pagamento.nomeCartao,
          securityCode: pagamento.codigoSeguranca,
        },
        pagamento.parcelas,
      );
    }
    return this.cieloService.setPagamento(pgto);
  }
  @ApiProperty({
    description: 'Consulta status de pagamentos',
  })
  @ApiResponse({
    status: 201,
  })
  @Get('/pagamento/:idPagamento')
  getPagamento(@Param('idPagamento') idPagamento: string) {
    return this.cieloService.getPagamento(new PagamentoDefault(idPagamento));
  }
}
