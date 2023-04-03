import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { CommitsResult } from './entities/commit_result';
import { Commit } from './entities/commit_result.interface';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class CommitsService {
  private readonly logger = new Logger(CommitsService.name);
  constructor(private readonly httpService: HttpService) {}

  async findAll(repo: string, owner: string): Promise<CommitsResult> {
    const { data } = await firstValueFrom(
      this.httpService.get<Commit[]>(`/repos/${owner}/${repo}/commits`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );

    return {
      author: {
        id: data[0].author.id,
        avatar_url: data[0].author.avatar_url,
        repos_url: data[0].author.repos_url,
        username: data[0].author.login,
      },
      commits: data.map((commit) => ({
        id: commit.node_id,
        url: commit.commit.url,
        message: commit.commit.message,
        date: commit.commit.committer.date,
        committer: {
          name: commit.commit.committer.name,
        },
      })),
    };
  }
}
