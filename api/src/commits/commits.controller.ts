import {
  Controller,
  Get,
  Query,
  UseInterceptors,
  CacheInterceptor,
} from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
@UseInterceptors(CacheInterceptor)
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  findAll(@Query('owner') owner: string, @Query('repo') repo: string) {
    return this.commitsService.findAll(repo, owner);
  }
}
