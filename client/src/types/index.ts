export interface IApiResponse<T> {
  result: T;
  message: string;
  code: number;
}
export type MutationType = "add" | "edit" | "delete" | null;

export interface IProjectDto {
  id: number
  name: string
  description: string
  ownerName: string
  priority: string
  startDateTime: string
  endDateTime: any
  createdAt: string
  updatedAt: string
}

export interface ITaskDto {
  id: number
  projectId: number
  title: string
  description?: string
  assigneeName?: string
  reporterName?: string
  priority: string
  dueDateTime?: string
  isDone: boolean
  createdAt: string
  updatedAt: string
}

export interface IProjectWithTasksDto extends IProjectDto {
  tasks: ITaskDto[]
}
