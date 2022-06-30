import { Module } from '@nestjs/common';
import { CieloService } from './cielo.service';
import { CieloController } from './cielo.controller';

@Module({
  controllers: [CieloController],
  providers: [CieloService],
})
export class CieloModule {}
