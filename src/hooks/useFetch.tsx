import useSWR from "swr";

import api from "@/lib/axios";

const defaultOptions = {
  shouldRetryOnError: false,
  revalidateOnFocus: true,
  revalidateOnMount: true,
};

type Params = {
  page?: number;
  sortBy?: string;
  limit?: number;
  orderBy?: string;
  status?: null | number;
  user?: null | number;
  username?: null | number;
};

export function useFetch(path: string, paramsFetch?: Params) {
  const fetcher = () =>
    api
      .get(path, {
        params: paramsFetch,
      })
      .then((res) => res.data);
  const data = useSWR([path, paramsFetch], fetcher, defaultOptions);
  return data;
}
