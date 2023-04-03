import { Injectable } from '@nestjs/common';
import { CreateCommitDto } from './dto/create-commit.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CommitsService {
  constructor(private readonly httpService: HttpService) {}

  create(createCommitDto: CreateCommitDto) {
    return 'This action adds a new commit';
  }

  findAll() {
    return `This action returns all commits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commit`;
  }
}
