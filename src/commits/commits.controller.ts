import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CreateCommitDto } from './dto/create-commit.dto';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Post()
  create(@Body() createCommitDto: CreateCommitDto) {
    return this.commitsService.create(createCommitDto);
  }

  @Get()
  findAll() {
    return this.commitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commitsService.findOne(+id);
  }
}
