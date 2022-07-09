import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class PagamentoDto {
  @ApiProperty({
    maxLength: 16,
    minLength: 16,
    description: 'Número do cartão, apenas números',
  })
  @IsString()
  numeroCartao: string;
  @ApiProperty({
    minimum: 0.01,
    maximum: 50000,
    description: 'Valor a ser transacionado',
  })
  @IsNumber()
  valor: number;
  @ApiProperty({
    maxLength: 3,
    minLength: 3,
    description: 'Número de segurança do cartão.',
  })
  @IsString()
  codigoSeguranca: string;
  @ApiProperty({
    minimum: 1,
    maximum: 48,
    description: 'Número de parcelas da compra.',
  })
  @IsNumber()
  parcelas: number;
  @ApiProperty({
    minLength: 3,
    description: 'Nome do titular do cartão exatamente como consta nele.',
  })
  @IsString()
  nomeCartao: string;
  @ApiProperty({
    minLength: 7,
    maxLength: 7,
    description: 'Data de validade do cartão no formato mm/yyyy',
    example: '10/2022',
  })
  @IsString()
  dataValidade: string;
  @ApiProperty({ description: 'Bandeira do cartão.' })
  @IsString()
  bandeira: string;

  @ApiProperty({
    description: 'Modalidade do cartão, débito(1) ou crédito(2).',
    minimum: 1,
    maximum: 2,
  })
  @IsNumber()
  modalidade: number;
}
