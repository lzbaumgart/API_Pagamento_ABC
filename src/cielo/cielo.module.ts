import { Module } from '@nestjs/common';
import { CieloService } from './cielo.service';
import { CieloController } from './cielo.controller';
import { PagamentoRepository } from 'src/database/repository/pagamento.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [CieloController],
  providers: [CieloService, PagamentoRepository],
  imports: [DatabaseModule],
})
export class CieloModule {}
