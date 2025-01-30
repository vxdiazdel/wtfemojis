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
  path: string;
  body?: TBody;
  query?: Record<string, string>;
  method: string;
  options?: RequestInit;
};

export type FetchRequest<T = void> = {
  query?: Record<string, string>;
  options?: RequestInit;
} & T extends infer U
  ? {
      [K in keyof U]: U[K];
    }
  : never;
