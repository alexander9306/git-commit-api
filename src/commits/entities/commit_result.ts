import { Author } from './author.entity';
import { Commit } from './commit.entity';

export class CommitsResult {
  author: Author;
  commits: Commit[];
}
