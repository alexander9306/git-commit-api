import { Module } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CommitsController } from './commits.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.github.com',
    }),
  ],
  controllers: [CommitsController],
  providers: [CommitsService],
})
export class CommitsModule {}
