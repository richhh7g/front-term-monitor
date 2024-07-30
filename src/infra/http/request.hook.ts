import { useEffect } from "react";

import { ResponseError } from "@model";
import {
  InitialDataFunction,
  QueryKey,
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useQuery,
} from "@tanstack/react-query";

export type RequestResult<TData> = {
  isLoading: boolean;
  isError: boolean;
  isFetched: boolean;
  isRefetching: boolean;
  error?: ResponseError | null;
  data?: TData;
  status: "error" | "idle" | "loading" | "success";
  refetch: (
    options?: RefetchOptions & RefetchQueryFilters
  ) => Promise<QueryObserverResult<TData, ResponseError>>;
};

export type UseRequestParams<TData> = {
  onCompleted?: (data: TData) => void;
  onError?: (err: ResponseError) => void;
};

export type UseRequestOptions<TData> = UseRequestParams<TData> & {
  requestKey: QueryKey | string;
  cacheTime?: number;
  initialData?: TData | InitialDataFunction<TData>;
};

type ApiFetcher<TInput, TData> = (variables?: TInput) => Promise<TData>;

export function useRequest<TInput, TData>(
  apiCall: ApiFetcher<TInput, TData>,
  options: UseRequestOptions<TData>
): RequestResult<TData> {
  const { onCompleted, onError, requestKey, cacheTime } = options;

  const {
    data,
    error,
    isError,
    isFetched,
    isLoading,
    isRefetching,
    refetch,
    status,
  } = useQuery<TData, ResponseError, TData, QueryKey>({
    queryFn: () => apiCall(),
    queryKey: typeof requestKey === "string" ? [requestKey] : requestKey,
    staleTime: cacheTime,
  });

  const requestStatus = status === "pending" ? "loading" : status;

  useEffect(() => {
    if (isError) {
      onError?.(error);
    }
  }, [error, isError, onError]);

  useEffect(() => {
    if (isFetched && data) {
      onCompleted?.(data);
    }
  }, [data, isFetched, onCompleted]);

  return {
    data,
    error,
    isError,
    isFetched,
    isLoading,
    isRefetching,
    refetch,
    status: requestStatus,
  };
}
