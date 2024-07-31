import { httpClient, HttpClientParams } from "@infra/http";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export const termCheckerHttpClient = async <TInput, TResponse>(
  params: HttpClientParams<TInput>
) => {
  return await httpClient<TInput, TResponse>({
    ...params,
    baseUrl: API_URL + (params.baseUrl ?? ""),
  });
};
