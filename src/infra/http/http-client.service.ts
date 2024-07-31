import { ResponseError } from "@model";

import { errorMessages } from "./error-messages";

const API_BASE_URL = "";
const apiBaseUrl = API_BASE_URL;

export type HttpClientParams<TInput> = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  headers?: HeadersInit;
  data?: TInput;
  baseUrl?: string;
};

export type HttpClient = <TInput, TResponse>(
  params: HttpClientParams<TInput>
) => Promise<TResponse>;

export const httpClient = async <TInput, TResponse>(
  params: HttpClientParams<TInput>
): Promise<TResponse> => {
  const { method, url, headers, data, baseUrl } = params;

  const finalUrl = baseUrl ? `${baseUrl}${url}` : `${apiBaseUrl}${url}`;

  const defaultHeaders = new Headers({
    accept: "application/json",
    "Content-Type": "application/json",
    ...headers,
  });

  const options: RequestInit = {
    method,
    headers: defaultHeaders,
    body: data ? JSON.stringify(data) : undefined,
  };

  try {
    const response = await fetch(finalUrl, options);

    if (!response.ok) {
      const errorMessage = errorMessages[response.status];

      const responseError: ResponseError = {
        status: response.status,
        name: errorMessage.title,
        message: errorMessage.description,
      };

      throw responseError;
    }

    const responseData: TResponse = await response.json();

    return responseData;
  } catch (err) {
    const error = err as ResponseError;

    if (error.name) {
      throw err;
    }

    const unknownStatus = 999;

    const unknownError: ResponseError = {
      status: unknownStatus,
      name: errorMessages[unknownStatus].title,
      message: errorMessages[unknownStatus].description,
    };

    throw unknownError;
  }
};
