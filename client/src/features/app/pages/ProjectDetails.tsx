import { useEffect, useMemo, useState } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbLink
} from "@/components/ui/breadcrumb"
import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

import TaskDialog from '../components/TaskDialog'
import { CheckCheck, Loader2, SquarePlus, Trash2, ArrowLeft } from 'lucide-react'
import type { IProjectWithTasksDto, ITaskDto } from '@/types'
import handleAPI from '@/apis/handleAPI'
import { Link, useParams } from 'react-router-dom'

const ProjectDetails = () => {
  const {projectId} = useParams();
  const [project, setProject] = useState<IProjectWithTasksDto | null>(null);
  const [tasks, setTasks] = useState<ITaskDto[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogMode, setDialogMode] = useState<'create' | 'edit'>('create')
  const [selectedTask, setSelectedTask] = useState<ITaskDto | null>(null)
  const [rowAction, setRowAction] = useState<{ id: number; type: 'delete' | 'done' } | null>(null)
  const [loading, setLoading] = useState(true)

  const now = useMemo(() => new Date(), [])

  useEffect(() => {
    const fetchProjectDetails = async () => {
      if (!projectId) return
      setLoading(true)
      try {
        const data = await handleAPI<IProjectWithTasksDto>({
          method: 'GET',
          endpoint: `/projects/${projectId}/with-tasks`,
        });
        setProject(data);
        setTasks(data.tasks || [])
       
      } catch (error) {
        console.error('Error fetching project details:', error);
      } finally {
        setLoading(false)
      }
    };

    fetchProjectDetails();
  }, [projectId]);

  const formatDateTime = (value: string | null | undefined) => {
    if (!value) return "-"
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return value
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date)
  }

  const priorityMeta = (priority: string) => {
    const normalized = priority?.toUpperCase?.() ?? ""
    const base = {
      LOW: {
        label: "Low",
        className: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-200",
      },
      MEDIUM: {
        label: "Medium",
        className: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-500/15 dark:text-amber-200",
      },
      HIGH: {
        label: "High",
        className: "bg-red-100 text-red-800 border-red-200 dark:bg-red-500/20 dark:text-red-200",
      },
    } as const
    return base[normalized as keyof typeof base] ?? {
      label: priority,
      className: "bg-muted text-foreground",
    }
  }

  const taskStatusMeta = (task: ITaskDto) => {
    if (task.isDone) {
      return {
        label: "Done",
        className: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-200",
      }
    }

    const due = task.dueDateTime ? new Date(task.dueDateTime) : null
    if (due && now > due) {
      return {
        label: "Overdue",
        className: "bg-red-100 text-red-800 border-red-200 dark:bg-red-500/20 dark:text-red-200",
      }
    }

    return {
      label: "In Progress",
      className: "bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-500/15 dark:text-sky-200",
    }
  }

  const handleCreate = () => {
    setDialogMode('create')
    setSelectedTask(null)
    setIsDialogOpen(true)
  }

  const handleEdit = (task: ITaskDto) => {
    setDialogMode('edit')
    setSelectedTask(task)
    setIsDialogOpen(true)
  }

  const handleDelete = async (task: ITaskDto) => {
    setRowAction({ id: task.id, type: 'delete' })
    try {
      await handleAPI<void>({
        endpoint: `/tasks/${task.id}`,
        method: 'DELETE',
      })
      setTasks((prev) => prev.filter((item) => item.id !== task.id))
    } catch (error) {
      console.error(error)
    } finally {
      setRowAction(null)
    }
  }

  const handleMarkDone = async (task: ITaskDto) => {
    setRowAction({ id: task.id, type: 'done' })
    try {
      const updated = await handleAPI<ITaskDto>({
        endpoint: `/tasks/${task.id}/done`,
        method: 'POST',
      })
      setTasks((prev) => prev.map((item) => (item.id === updated.id ? updated : item)))
    } catch (error) {
      console.error(error)
    } finally {
      setRowAction(null)
    }
  }

  const isRowActionLoading = (taskId: number, action: 'delete' | 'done') =>
    rowAction?.id === taskId && rowAction.type === action

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="size-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <p className="text-muted-foreground">Project not found</p>
        <Button asChild variant="outline">
          <Link to="/">
            <ArrowLeft className="size-4 mr-2" />
            Back to Projects
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center h-6">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem >
                            <BreadcrumbLink asChild><Link to="/projects">Projects</Link></BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{project.name}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Button asChild variant="ghost" size="sm">
                    <Link to="/">
                        <ArrowLeft className="size-4 mr-2" />
                        Back
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-start justify-between">
                        <div>
                            <CardTitle className="text-2xl">{project.name}</CardTitle>
                            <CardDescription className="mt-2">
                                {project.description || "No description provided"}
                            </CardDescription>
                        </div>
                        <Badge variant="outline" className={cn(priorityMeta(project.priority).className)}>
                            {priorityMeta(project.priority).label}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                            <p className="text-muted-foreground">Owner</p>
                            <p className="font-medium">{project.ownerName}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">Start Date</p>
                            <p className="font-medium">{formatDateTime(project.startDateTime)}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">End Date</p>
                            <p className="font-medium">{formatDateTime(project.endDateTime)}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">Status</p>
                            <p className="font-medium">
                                {project.endDateTime ? "Done" : "In Progress"}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Tasks</h2>
                    <Button variant="outline" className="h-7 gap-2" onClick={handleCreate}>
                        <SquarePlus className="size-4" />
                        Add Task
                    </Button>
                </div>

                <Table>
                    <TableCaption>Tasks for this project.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Assignee</TableHead>
                            <TableHead>Reporter</TableHead>
                            <TableHead>Priority</TableHead>
                            <TableHead>Due Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tasks.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={8} className="text-center text-sm text-muted-foreground">
                                    No tasks yet. Click "Add Task" to create one.
                                </TableCell>
                            </TableRow>
                        ) : (
                            tasks.map((task) => (
                                <TableRow key={task.id}>
                                    <TableCell>{task.id}</TableCell>
                                    <TableCell className="font-medium">{task.title}</TableCell>
                                    <TableCell>{task.assigneeName || "-"}</TableCell>
                                    <TableCell>{task.reporterName || "-"}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={cn(priorityMeta(task.priority).className)}>
                                            {priorityMeta(task.priority).label}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{formatDateTime(task.dueDateTime)}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={cn(taskStatusMeta(task).className)}>
                                            {taskStatusMeta(task).label}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-1">
                                            <Button variant="ghost" size="sm" onClick={() => handleEdit(task)}>
                                                Edit
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-green-500 hover:text-green-600"
                                                onClick={() => handleMarkDone(task)}
                                                disabled={task.isDone || isRowActionLoading(task.id, 'done')}
                                            >
                                                {isRowActionLoading(task.id, 'done') ? (
                                                    <Loader2 className="size-4 animate-spin" />
                                                ) : (
                                                    <CheckCheck className="size-4" />
                                                )}
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-destructive hover:text-destructive"
                                                onClick={() => handleDelete(task)}
                                                disabled={isRowActionLoading(task.id, 'delete')}
                                            >
                                                {isRowActionLoading(task.id, 'delete') ? (
                                                    <Loader2 className="size-4 animate-spin" />
                                                ) : (
                                                    <Trash2 className="size-4" />
                                                )}
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            <TaskDialog
                setTasks={setTasks}
                open={isDialogOpen}
                mode={dialogMode}
                task={selectedTask}
                projectId={Number(projectId)}
                onClose={() => setIsDialogOpen(false)}
            />
    </div>
  )
}

export default ProjectDetails