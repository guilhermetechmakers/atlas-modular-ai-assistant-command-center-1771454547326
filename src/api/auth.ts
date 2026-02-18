import { api } from '@/lib/api'
import type { AuthResponse, SignInInput, SignUpInput } from '@/types/auth'

const TOKEN_KEY = 'atlas_token'

export const authApi = {
  signIn: async (credentials: SignInInput): Promise<AuthResponse> => {
    const data = await api.post<AuthResponse>('/auth/login', credentials)
    if (data.token && typeof window !== 'undefined') {
      localStorage.setItem(TOKEN_KEY, data.token)
    }
    return data
  },

  signUp: async (credentials: SignUpInput): Promise<AuthResponse> => {
    const data = await api.post<AuthResponse>('/auth/register', credentials)
    if (data.token && typeof window !== 'undefined') {
      localStorage.setItem(TOKEN_KEY, data.token)
    }
    return data
  },

  signOut: async (): Promise<void> => {
    try {
      await api.post('/auth/logout', {})
    } finally {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(TOKEN_KEY)
      }
    }
  },

  resetPassword: async (email: string): Promise<void> =>
    api.post('/auth/forgot-password', { email }),

  updatePassword: async (token: string, newPassword: string): Promise<void> =>
    api.post('/auth/reset-password', { token, password: newPassword }),

  refreshToken: async (): Promise<AuthResponse> => {
    const data = await api.post<AuthResponse>('/auth/refresh', {})
    if (data.token && typeof window !== 'undefined') {
      localStorage.setItem(TOKEN_KEY, data.token)
    }
    return data
  },

  verifyEmail: async (token: string): Promise<void> =>
    api.post('/auth/verify-email', { token }),
}
