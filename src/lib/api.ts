const API_BASE = import.meta.env.VITE_API_URL ?? '/api'

export interface ApiErrorShape {
  message: string
  code?: string
  status?: number
}

export type ApiError = Error & ApiErrorShape

export function createApiError(
  message: string,
  status?: number,
  code?: string
): ApiError {
  const err = new Error(message) as ApiError
  err.name = 'ApiError'
  err.status = status
  err.code = code
  return err
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE}${endpoint}`
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  }
  const token = typeof window !== 'undefined' ? localStorage.getItem('atlas_token') : null
  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`
  }
  const res = await fetch(url, { ...options, headers })
  if (!res.ok) {
    if (res.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('atlas_token')
      window.location.href = '/auth/login'
    }
    let message = res.statusText
    let code: string | undefined
    try {
      const body = await res.json()
      if (body.message) message = body.message
      if (body.code) code = body.code
    } catch {
      // ignore
    }
    throw createApiError(message, res.status, code)
  }
  const contentType = res.headers.get('content-type')
  if (contentType?.includes('application/json')) {
    return res.json() as Promise<T>
  }
  return res.text() as Promise<T>
}

export const api = {
  get: <T>(endpoint: string) => request<T>(endpoint, { method: 'GET' }),
  post: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, { method: 'POST', body: body ? JSON.stringify(body) : undefined }),
  put: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, { method: 'PUT', body: body ? JSON.stringify(body) : undefined }),
  patch: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, { method: 'PATCH', body: body ? JSON.stringify(body) : undefined }),
  delete: <T>(endpoint: string) => request<T>(endpoint, { method: 'DELETE' }),
}

export interface ApiResponse<T> {
  data: T | null
  error: string | null
}

export interface PaginatedResponse<T> {
  data: T[]
  count: number
  page: number
  limit: number
}
