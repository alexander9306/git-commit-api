import { Author } from './author.entity.interface';
import { Commit } from './commit.entity.interface';

export interface CommitResponse {
  author: Author;
  commits: Commit[];
}
