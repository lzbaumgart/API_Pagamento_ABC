import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CieloModule } from './cielo/cielo.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CieloModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
