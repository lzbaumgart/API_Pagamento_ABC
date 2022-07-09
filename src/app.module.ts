import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CieloModule } from './cielo/cielo.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CieloModule, DatabaseModule, ConfigModule.forRoot()],
  providers: [AppService],
  exports: [DatabaseModule],
})
export class AppModule {}
