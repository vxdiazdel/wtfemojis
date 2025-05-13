export type ResponseData<TData, TError = Error> = Partial<{
  data: TData;
  error: TError;
}>;

export type ApiResponse<TData, TError = Error> = {
  data?: TData;
  status: number;
  error?: TError;
};

export type FetchArgs<TBody> = {
  baseUrl?: string;
  path: string;
  body?: TBody;
  query?: Record<string, string>;
  method: string;
  options?: RequestInit;
};

export type FetchRequest<T = void> = {
  baseUrl?: string;
  query?: Record<string, string>;
  options?: RequestInit;
} & T extends infer U
  ? {
      [K in keyof U]: U[K];
    }
  : never;
