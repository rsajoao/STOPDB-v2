export interface FetchResult {
  response: Response | null;
  json: unknown;
}

export interface FetchParameters {
  url: string;
  options: FetchOptions;
}

export interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  cache?: RequestCache;
  redirect?: RequestRedirect;
  timeout?: number;
  signal?: AbortSignal | null;
}

export interface FetchError {
  code: number;
  error: string;
  message: string;
}
