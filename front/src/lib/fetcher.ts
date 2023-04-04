import { Fetcher } from 'swr';
import { CommitResponse } from '@shared/entities/commit_response.interface';

export const fetcher: Fetcher<CommitResponse, string> = async (
  url
) => {
  const res = await fetch(url, { mode: 'cors' });
  if (!res.ok) {
    const error = new Error(
      'An error occurred while fetching the data.'
    );
    throw error;
  }

  return res.json();
};
