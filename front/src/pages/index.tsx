import Head from 'next/head';
import useSWR, { Fetcher } from 'swr';
import { useState } from 'react';
import { CommitResponse } from '@shared/entities/commit_response.interface';

const fetcher: Fetcher<CommitResponse, string> = (url) =>
  fetch(url, { mode: 'cors' }).then((res) => res.json());

export default function Home() {
  const defaultParams = {
    owner: 'alexander9306',
    repository: 'git-commit-api',
  };
  const [owner, setOwner] = useState(defaultParams.owner);
  const [repository, setRepository] = useState(
    defaultParams.repository
  );

  const [requestData, setRequestData] = useState(defaultParams);

  const baseUrl = 'http://localhost:3000';
  const { data, error, isLoading } = useSWR(
    `${baseUrl}/commits?owner=${requestData.owner}&repo=${requestData.repository}`,
    fetcher
  );

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    setRequestData({
      owner,
      repository,
    });
  };

  const handleReset = () => {
    setOwner(defaultParams.owner);
    setRepository(defaultParams.repository);

    setRequestData(defaultParams);
  };

  return (
    <>
      <Head>
        <title>Git Commit History</title>
        <meta
          name="description"
          content="Show the git commits of a given repository"
        />
        <meta name="author" content="Alexander Damaso" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto h-screen">
        <form onSubmit={handleSubmit}>
          <h1 className="text-8xl text-center pt-5 pb-5">
            Git Commit History
          </h1>
          <div className="flex flex-col mb-4">
            <label htmlFor="owner" className="font-bold mb-2">
              Owner
            </label>
            <input
              type="text"
              name="owner"
              id="owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              className="border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="repository" className="font-bold mb-2">
              Repository
            </label>
            <input
              type="text"
              name="repository"
              id="repository"
              className="border border-gray-400 p-2 rounded-md"
              value={repository}
              onChange={(e) => setRepository(e.target.value)}
            />
          </div>
          <div className="flex "></div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </form>
        {isLoading && <p className="mt-4">Loading...</p>}
        {!!error && (
          <p className="text-red-500 mt-4">{error.message}</p>
        )}

        {!!data && (
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2">Created at</th>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Committer</th>
              </tr>
            </thead>
            <tbody>
              {data?.commits.map((commit) => (
                <tr key={commit.id}>
                  <td className="border px-4 py-2">{commit.date}</td>
                  <td className="border px-4 py-2">
                    {commit.message}
                  </td>
                  <td className="border px-4 py-2">
                    {commit.committer.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
