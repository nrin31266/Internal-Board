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
import type { IProjectDto, MutationType } from "@/types"
import handleAPI from "@/apis/handleAPI"

const priorityEnum = z.enum(["LOW", "MEDIUM", "HIGH"])
type PriorityValue = z.infer<typeof priorityEnum>

const PRIORITY_OPTIONS: Array<{ value: PriorityValue; label: string }> = [
  { value: priorityEnum.enum.LOW, label: "Low" },
  { value: priorityEnum.enum.MEDIUM, label: "Medium" },
  { value: priorityEnum.enum.HIGH, label: "High" },
]

const projectFormSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().max(2000, "Description is too long").optional(),
  ownerName: z.string().min(1, "Owner is required"),
  priority: priorityEnum,
  startDateTime: z
    .string()
    .min(1, "Start date is required")
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: "Invalid date",
    }),
})

type ProjectFormValues = z.infer<typeof projectFormSchema>

interface ProjectDialogProps {
  mode: "create" | "edit"
  project: IProjectDto | null
  open: boolean
  onClose: () => void
  setProjects: Dispatch<React.SetStateAction<IProjectDto[]>>
}

const isPriorityValue = (value: unknown): value is PriorityValue =>
  priorityEnum.options.includes(value as PriorityValue)

const toDateTimeLocal = (value?: string | null): string => {
  if (!value) return ""
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ""
  return date.toISOString().slice(0, 16)
}

const buildInitialValues = (projectData: any): ProjectFormValues => ({
  name: projectData?.name ?? "",
  description: projectData?.description ?? "",
  ownerName: projectData?.ownerName ?? "",
  priority: isPriorityValue(projectData?.priority)
    ? projectData.priority
    : priorityEnum.enum.MEDIUM,
  startDateTime: toDateTimeLocal(projectData?.startDateTime ?? null),
})

const ProjectDialog = ({ open, mode, project, onClose, setProjects }: ProjectDialogProps) => {
  const [mutationType, setMutationType] = useState<MutationType>("add")
  const [loading, setLoading] = useState(false)
  

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: buildInitialValues(project),
  })

  useEffect(() => {
    if (open) {
      form.reset(buildInitialValues(project))
    }
  }, [open, project, form])

  const handleDialogChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      onClose()
      form.reset(buildInitialValues(project))
    }
  }

  const onSubmit = (values: ProjectFormValues) => {
    const sanitized: ProjectFormValues = {
      ...values,
      description: values.description?.trim() ? values.description.trim() : undefined,
      ownerName: values.ownerName.trim(),
      startDateTime: new Date(values.startDateTime).toISOString(),
    }

    if (mode === "create") {
      void addProject(sanitized)
    } else if (mode === "edit" && project) {
      void updateProject(project.id, sanitized)
    }
  }

  async function addProject(projectData: ProjectFormValues) {
    setMutationType("add")
    setLoading(true)
    try {
      const created = await handleAPI<IProjectDto, ProjectFormValues>({
        endpoint: "/projects",
        method: "POST",
        body: projectData,
      })
      setProjects((prevProjects) => [...prevProjects, created])
      onClose()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProject(id: number, projectData: ProjectFormValues) {
    setMutationType("edit")
    setLoading(true)
    try {
      const updated = await handleAPI<IProjectDto, ProjectFormValues>({
        endpoint: `/projects/${id}`,
        method: "PUT",
        body: projectData,
      })
      setProjects((prevProjects) =>
        prevProjects.map((item) => (item.id === updated.id ? updated : item)),
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
            {mode === "edit" ? "Edit project" : "Project information"}
          </DialogTitle>
          <DialogDescription>
            Provide the project details below. Submitting validates the form and prints
            the payload for review.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a project name" {...field} />
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
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ownerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Who is responsible?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
              name="startDateTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start date *</FormLabel>
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
                {loading ? "Saving..." : mode === "edit" ? "Save Changes" : "Create Project"}
              </Button>
            </DialogFooter>
          </form>
        </Form>

        
      </DialogContent>
    </Dialog>
  )
}

export default ProjectDialog