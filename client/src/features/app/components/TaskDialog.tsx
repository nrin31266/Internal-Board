import { useEffect, useState, type Dispatch } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { ITaskDto } from "@/types"
import handleAPI from "@/apis/handleAPI"

const priorityEnum = z.enum(["LOW", "MEDIUM", "HIGH"])
type PriorityValue = z.infer<typeof priorityEnum>

const PRIORITY_OPTIONS: Array<{ value: PriorityValue; label: string }> = [
  { value: priorityEnum.enum.LOW, label: "Low" },
  { value: priorityEnum.enum.MEDIUM, label: "Medium" },
  { value: priorityEnum.enum.HIGH, label: "High" },
]

const taskFormSchema = z.object({
  title: z.string().min(1, "Task title is required"),
  description: z.string().max(2000, "Description is too long").optional(),
  assigneeName: z.string().optional(),
  reporterName: z.string().optional(),
  priority: priorityEnum,
  dueDateTime: z
    .string()
    .optional()
    .refine((value) => !value || !Number.isNaN(Date.parse(value)), {
      message: "Invalid date",
    }),
})

type TaskFormValues = z.infer<typeof taskFormSchema>

interface TaskDialogProps {
  mode: "create" | "edit"
  task: ITaskDto | null
  projectId: number
  open: boolean
  onClose: () => void
  setTasks: Dispatch<React.SetStateAction<ITaskDto[]>>
}

const isPriorityValue = (value: unknown): value is PriorityValue =>
  priorityEnum.options.includes(value as PriorityValue)

const toDateTimeLocal = (value?: string | null): string => {
  if (!value) return ""
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ""
  return date.toISOString().slice(0, 16)
}

const buildInitialValues = (taskData: any): TaskFormValues => ({
  title: taskData?.title ?? "",
  description: taskData?.description ?? "",
  assigneeName: taskData?.assigneeName ?? "",
  reporterName: taskData?.reporterName ?? "",
  priority: isPriorityValue(taskData?.priority)
    ? taskData.priority
    : priorityEnum.enum.MEDIUM,
  dueDateTime: toDateTimeLocal(taskData?.dueDateTime ?? null),
})

const TaskDialog = ({ open, mode, task, projectId, onClose, setTasks }: TaskDialogProps) => {
  const [loading, setLoading] = useState(false)

  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: buildInitialValues(task),
  })

  useEffect(() => {
    if (open) {
      form.reset(buildInitialValues(task))
    }
  }, [open, task, form])

  const handleDialogChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      onClose()
      form.reset(buildInitialValues(task))
    }
  }

  const onSubmit = (values: TaskFormValues) => {
    const sanitized = {
      ...values,
      description: values.description?.trim() || undefined,
      assigneeName: values.assigneeName?.trim() || undefined,
      reporterName: values.reporterName?.trim() || undefined,
      dueDateTime: values.dueDateTime
        ? new Date(values.dueDateTime).toISOString()
        : undefined,
    }

    if (mode === "create") {
      void addTask(sanitized)
    } else if (mode === "edit" && task) {
      void updateTask(task.id, sanitized)
    }
  }

  async function addTask(taskData: any) {
    setLoading(true)
    try {
      const created = await handleAPI<ITaskDto>({
        endpoint: "/tasks",
        method: "POST",
        body: { ...taskData, projectId },
      })
      setTasks((prevTasks) => [...prevTasks, created])
      onClose()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateTask(id: number, taskData: any) {
    setLoading(true)
    try {
      const updated = await handleAPI<ITaskDto>({
        endpoint: `/tasks/${id}`,
        method: "PUT",
        body: { ...taskData, projectId },
      })
      setTasks((prevTasks) =>
        prevTasks.map((item) => (item.id === updated.id ? updated : item)),
      )
      onClose()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "edit" ? "Edit task" : "Task information"}
          </DialogTitle>
          <DialogDescription>
            Provide the task details below. All fields except title are optional.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task title *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a task title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add an optional description"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="assigneeName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assignee</FormLabel>
                    <FormControl>
                      <Input placeholder="Assignee name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reporterName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reporter</FormLabel>
                    <FormControl>
                      <Input placeholder="Reporter name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a priority" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {PRIORITY_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dueDateTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Due date</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  form.reset()
                  onClose()
                }}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : mode === "edit" ? "Save Changes" : "Create Task"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDialog