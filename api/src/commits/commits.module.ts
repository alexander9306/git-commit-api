import { Module, CacheModule } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CommitsController } from './commits.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.github.com',
    }),
    CacheModule.register({
      // cache requests for 2 minutes to avoid github request limit
      ttl: 120,
    }),
  ],
  controllers: [CommitsController],
  providers: [CommitsService],
})
export class CommitsModule {}
