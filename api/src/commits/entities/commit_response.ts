import { Author } from './author.entity';
import { Commit } from './commit.entity';

export class CommitResponse {
  author: Author;
  commits: Commit[];
}
