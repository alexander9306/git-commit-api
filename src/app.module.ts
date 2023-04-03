import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CommitsModule } from './commits/commits.module';

@Module({
  imports: [ConfigModule.forRoot(), CommitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
