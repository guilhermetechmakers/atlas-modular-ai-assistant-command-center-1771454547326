import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { authApi } from '@/api/auth'
import { usersApi } from '@/api/users'
import { toast } from 'sonner'
const AUTH_USER_KEY = ['auth', 'user'] as const

function hasToken(): boolean {
  if (typeof window === 'undefined') return false
  return !!localStorage.getItem('atlas_token')
}

export function useCurrentUser() {
  return useQuery({
    queryKey: AUTH_USER_KEY,
    queryFn: usersApi.getCurrent,
    retry: false,
    staleTime: 1000 * 60 * 10,
    enabled: hasToken(),
  })
}

export function useSignIn() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: authApi.signIn,
    onSuccess: (data) => {
      if (data.user) {
        queryClient.setQueryData(AUTH_USER_KEY, data.user)
      }
      toast.success('Signed in successfully')
    },
    onError: (err: Error & { response?: { data?: { message?: string } } }) => {
      toast.error(
        err.response?.data?.message ?? err.message ?? 'Sign in failed'
      )
    },
  })
}

export function useSignUp() {
  return useMutation({
    mutationFn: authApi.signUp,
    onSuccess: () => {
      toast.success(
        'Account created. Please check your email to verify your account.'
      )
    },
    onError: (err: Error & { response?: { data?: { message?: string } } }) => {
      toast.error(
        err.response?.data?.message ?? err.message ?? 'Sign up failed'
      )
    },
  })
}

export function useSignOut() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: authApi.signOut,
    onSuccess: () => {
      queryClient.clear()
      toast.success('Signed out successfully')
    },
    onError: (err: Error) => {
      toast.error(err.message ?? 'Sign out failed')
    },
  })
}

export function usePasswordReset() {
  return useMutation({
    mutationFn: (email: string) => authApi.resetPassword(email),
    onSuccess: () => {
      toast.success('Password reset email sent. Check your inbox.')
    },
    onError: (err: Error & { response?: { data?: { message?: string } } }) => {
      toast.error(
        err.response?.data?.message ?? err.message ?? 'Password reset failed'
      )
    },
  })
}
