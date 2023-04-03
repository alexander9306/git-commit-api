export class Commit {
  id: string;
  message: string;
  url: string;
  date?: string;
  committer: Committer;
}

export class Committer {
  name?: string;
}
