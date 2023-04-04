import { Controller, Get, Query } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  findAll(@Query('owner') owner: string, @Query('repo') repo: string) {
    return this.commitsService.findAll(repo, owner);
  }
}
