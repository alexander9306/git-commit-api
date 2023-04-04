export interface Commit {
  id: string;
  message: string;
  url: string;
  date?: string;
  committer: Committer;
}

export interface Committer {
  name?: string;
}
