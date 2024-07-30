import { ResponseError } from "@model";
import {
  MutationKey,
  NetworkMode,
  UseMutateFunction,
  useMutation,
} from "@tanstack/react-query";

type LazyRequestResultProps<TResponse> = {
  isLoading: boolean;
  isError: boolean;
  isFetched: boolean;
  isIdle: boolean;
  isPaused: boolean;
  error?: ResponseError | null;
  data?: TResponse;
  status: "error" | "idle" | "loading" | "success";
};

type LazyRequestResult<TData, TInput> = [
  UseMutateFunction<TData, ResponseError, TInput, unknown>,
  LazyRequestResultProps<TData>
];

export type UseLazyRequestParams<TData = unknown> = {
  onCompleted?: (data: TData) => void;
  onError?: (err: ResponseError) => void;
};

export type UseLazyRequestOptions<TData = unknown> =
  UseLazyRequestParams<TData> & {
    requestKey: MutationKey | string;
    networkMode?: NetworkMode;
  };

type ApiFetcher<TInput = unknown, TData = unknown> = (
  variables: TInput
) => Promise<TData>;

export function useLazyRequest<TData = unknown, TInput = unknown>(
  apiCall: ApiFetcher<TInput, TData>,
  options: UseLazyRequestOptions<TData>
): LazyRequestResult<TData, TInput> {
  const { onCompleted, onError, requestKey, networkMode } = options;

  const { mutate, isPending, status, isSuccess, ...rest } = useMutation({
    mutationFn: (variables: TInput) => apiCall(variables),
    onSuccess: onCompleted,
    mutationKey: typeof requestKey === "string" ? [requestKey] : requestKey,
    onError,
    networkMode,
  });

  const requestStatus = status === "pending" ? "loading" : status;

  return [
    mutate,
    {
      ...rest,
      isLoading: isPending,
      isFetched: isSuccess,
      status: requestStatus,
    },
  ];
}
