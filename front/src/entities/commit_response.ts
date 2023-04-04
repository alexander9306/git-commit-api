import { Author } from './author.entity';
import { Commit } from './commit.entity';

export interface CommitResponse {
  author: Author;
  commits: Commit[];
}
