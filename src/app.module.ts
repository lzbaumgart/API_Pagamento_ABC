import { Module } from '@nestjs/common';
import { CieloModule } from './cielo/cielo.module';
import { DatabaseModule } from './database/database.module';
import { PagamentoEntity } from './database/entity/pagamento.entity';

@Module({
  imports: [CieloModule, DatabaseModule],
  exports: [DatabaseModule],
})
export class AppModule {}
