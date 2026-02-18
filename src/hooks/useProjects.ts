import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { projectsApi } from '@/api/projects'
import { toast } from 'sonner'
import type {
  Project,
  CreateProjectInput,
  UpdateProjectInput,
} from '@/types/project'

export const projectKeys = {
  all: ['projects'] as const,
  lists: () => [...projectKeys.all, 'list'] as const,
  list: (filters: string) => [...projectKeys.lists(), { filters }] as const,
  details: () => [...projectKeys.all, 'detail'] as const,
  detail: (id: string) => [...projectKeys.details(), id] as const,
}

export function useProjects() {
  return useQuery({
    queryKey: projectKeys.lists(),
    queryFn: projectsApi.getAll,
    staleTime: 1000 * 60 * 5,
  })
}

export function useProject(id: string) {
  return useQuery({
    queryKey: projectKeys.detail(id),
    queryFn: () => projectsApi.getById(id),
    enabled: !!id,
  })
}

export function useCreateProject() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (project: CreateProjectInput) => projectsApi.create(project),
    onSuccess: (newProject: Project) => {
      queryClient.invalidateQueries({ queryKey: projectKeys.lists() })
      queryClient.setQueryData(projectKeys.detail(newProject.id), newProject)
      toast.success('Project created successfully')
    },
    onError: (err: Error) => {
      toast.error(err.message ?? 'Failed to create project')
    },
  })
}

export function useUpdateProject() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      id,
      updates,
    }: {
      id: string
      updates: UpdateProjectInput
    }) => projectsApi.update(id, updates),
    onSuccess: (updatedProject: Project) => {
      queryClient.setQueryData(
        projectKeys.detail(updatedProject.id),
        updatedProject
      )
      queryClient.invalidateQueries({ queryKey: projectKeys.lists() })
      toast.success('Project updated successfully')
    },
    onError: (err: Error) => {
      toast.error(err.message ?? 'Failed to update project')
    },
  })
}

export function useDeleteProject() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => projectsApi.delete(id),
    onSuccess: (_, deletedId) => {
      queryClient.removeQueries({ queryKey: projectKeys.detail(deletedId) })
      queryClient.invalidateQueries({ queryKey: projectKeys.lists() })
      toast.success('Project deleted successfully')
    },
    onError: (err: Error) => {
      toast.error(err.message ?? 'Failed to delete project')
    },
  })
}
