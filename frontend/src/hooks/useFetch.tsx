import React from 'react';
import { FetchOptions, FetchResult, FetchError } from '../interfaces/Fetch';

const useFetch = () => {
  const [data, setData] = React.useState<unknown>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const request = React.useCallback(
    async (url: string, options: FetchOptions): Promise<FetchResult> => {
      let response: Response | null;
      let json;

      try {
        setError(null);
        setLoading(true);

        response = await fetch(url, options);
        json = await response.json();
        if (response.ok) setData(json);
        if ('message' in json && 'error' in json) throw new Error(json.message);
      } catch (err) {
        setError((err as Error).message);
        response = null;
      } finally {
        setLoading(false);
      }

      return { response, json };
    },
    [],
  );
  return { data, error, loading, request };
};

export default useFetch;
