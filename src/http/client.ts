import { camelizeKeys, snakeCaseKeys } from '@/common/utils';
import type { ApiResponse, FetchArgs, ResponseData } from './types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const DEFAULT_HEADERS: Record<string, string> = {
  'Content-Type': 'application/json',
};

export async function get<TData>({
  baseUrl,
  path,
  query = {},
  options = {},
}: {
  baseUrl?: string;
  path: string;
  query?: Record<string, string>;
  options?: RequestInit;
}): Promise<ApiResponse<TData>> {
  return _fetch({ baseUrl, path, query, options, method: 'GET' });
}

export async function post<TData, TBody>({
  baseUrl,
  path,
  body = {} as TBody,
  options = {},
}: {
  baseUrl?: string;
  path: string;
  body?: TBody;
  options?: RequestInit;
}): Promise<ApiResponse<TData>> {
  return _fetch({ baseUrl, path, body, options, method: 'POST' });
}

async function _fetch<TData, TBody>({
  baseUrl,
  path,
  body,
  query = {},
  method,
  options = {},
}: FetchArgs<TBody>) {
  const opts = {
    method,
    body: body ? JSON.stringify(snakeCaseKeys(body)) : undefined,
    ...options,
    headers: {
      ...DEFAULT_HEADERS,
      ...((options.headers ?? {}) as Record<string, string>),
    },
  };
  const queryParams = Object.entries(query)
    .filter(([, val]) => Boolean(val))
    .reduce(
      (acc, [key, val]) => ({
        ...acc,
        [key]: val,
      }),
      {},
    );
  const params = new URLSearchParams(queryParams);

  const res = await fetch(
    `${baseUrl ?? BASE_URL}${path}${
      params.size ? `?${params.toString()}` : ''
    }`,
    opts,
  );

  return handleResponse<TData>(res);
}

async function handleResponse<TData>(
  res: Response,
): Promise<ApiResponse<TData>> {
  const data = (await res.json()) as ResponseData<TData>;

  if (res.ok) {
    return {
      data: camelizeKeys(data.data ?? {}) as TData,
      status: res.status,
    };
  }

  return {
    error: data.error,
    status: res.status,
  };
}
