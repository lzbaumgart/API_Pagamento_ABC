import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagamentoEntity } from './entity/pagamento.entity';

const entities = TypeOrmModule.forFeature([PagamentoEntity]);

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'sqlite',
          database: 'pagamentos.sqlite',
          entities: [process.env.ENTITIES],
          synchronize: true,
        };
      },
    }),
    entities,
  ],
  exports: [entities],
})
export class DatabaseModule {}
