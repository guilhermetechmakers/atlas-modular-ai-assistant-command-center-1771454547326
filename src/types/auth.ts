export interface AuthResponse {
  token: string
  user?: { id: string; email: string; full_name?: string; avatar_url?: string }
}

export interface SignInInput {
  email: string
  password: string
}

export interface SignUpInput {
  email: string
  password: string
  full_name?: string
  workspace_name?: string
}
