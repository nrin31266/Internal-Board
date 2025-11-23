import React, { useEffect, useMemo, useState } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
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
import { cn } from "@/lib/utils"

import ProjectDialog from '../components/ProjectDialog'
import { CheckCheck, Loader2, SquarePlus, Trash2 } from 'lucide-react'
import type { IApiResponse, IProjectDto } from '@/types'
import handleAPI from '@/apis/handleAPI'
import { Link, useNavigate } from 'react-router-dom'




const Projects = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogMode, setDialogMode] = useState<'create' | 'edit'>('create');
    const [selectedProject, setSelectedProject] = useState<IProjectDto | null>(null);
    const [projects, setProjects] = useState<IProjectDto[]>([]);
    const [rowAction, setRowAction] = useState<{ id: number; type: 'delete' | 'done' } | null>(null)
    const navigate = useNavigate();
    const now = useMemo(() => new Date(), []);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await handleAPI<IProjectDto[]>({
                    endpoint: "/projects",
                    method: "GET",
                });
                setProjects(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProjects();
    }, []);


    const formatDateTime = (value: string | null | undefined) => {
        if (!value) return "-";
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return value;
        return new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
        }).format(date);
    };

    const priorityMeta = (priority: string) => {
        const normalized = priority?.toUpperCase?.() ?? "";
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
        } as const;
        return base[normalized as keyof typeof base] ?? {
            label: priority,
            className: "bg-muted text-foreground",
        };
    };

    const projectStatusMeta = (project: IProjectDto) => {
        if (project.endDateTime) {
            return {
                label: "Done",
                className: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-200",
            };
        }

        const start = project.startDateTime ? new Date(project.startDateTime) : null;
        if (start && now >= start) {
            return {
                label: "In Progress",
                className: "bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-500/15 dark:text-sky-200",
            };
        }

        return {
            label: "Scheduled",
            className: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-500/15 dark:text-slate-200",
        };
    };

    const handleCreate = () => {
        setDialogMode('create');
        setSelectedProject(null);
        setIsDialogOpen(true);
    };

    const handleEdit = (project: IProjectDto) => {
        setDialogMode('edit');
        setSelectedProject(project);
        setIsDialogOpen(true);
    };

    const handleDelete = async (project: IProjectDto) => {
        setRowAction({ id: project.id, type: 'delete' });
        try {
            await handleAPI<void>({
                endpoint: `/projects/${project.id}`,
                method: 'DELETE',
            });
            setProjects((prev) => prev.filter((item) => item.id !== project.id));
        } catch (error) {
            console.error(error);
        } finally {
            setRowAction(null);
        }
    };

    const handleMarkDone = async (project: IProjectDto) => {
        setRowAction({ id: project.id, type: 'done' });
        try {
            const updated = await handleAPI<IProjectDto>({
                endpoint: `/projects/${project.id}/done`,
                method: 'POST',
            });
            setProjects((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
        } catch (error) {
            console.error(error);
        } finally {
            setRowAction(null);
        }
    };

    const isRowActionLoading = (projectId: number, action: 'delete' | 'done') =>
        rowAction?.id === projectId && rowAction.type === action;

  return (
    <div>
        <div className="flex justify-between items-center h-6">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem >
                            <BreadcrumbPage>Projects</BreadcrumbPage>
                        </BreadcrumbItem>
                        
                    </BreadcrumbList>
                </Breadcrumb>
                <div>
                     <Button variant="outline" className="h-7 gap-2" onClick={handleCreate}>
                        <SquarePlus className="size-4" />
                        Add Project
                    </Button>
                   <ProjectDialog setProjects={setProjects} open={isDialogOpen} mode={dialogMode} project={selectedProject} onClose={() => setIsDialogOpen(false)} />
                </div>
            </div>

            <div className="mt-6">
                <Table>
                    <TableCaption>Latest created projects.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Owner</TableHead>
                            <TableHead>Priority</TableHead>
                            <TableHead>Start Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Created</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={9} className="text-center text-sm text-muted-foreground">
                                    No projects yet. Click "Add Project" to create one.
                                </TableCell>
                            </TableRow>
                        ) : (
                            projects.map((project) => (
                                <TableRow key={project.id}>
                                    <TableCell>{project.id}</TableCell>
                                    <TableCell className="font-medium">
                                        <Link to={`/projects/${project.id}`}>{project.name}</Link>
                                    </TableCell>
                                    <TableCell className="max-w-40 truncate" title={project.description}>
                                        {project.description || "-"}
                                    </TableCell>
                                    <TableCell>{project.ownerName}</TableCell>
                                    <TableCell>
                                        {(() => {
                                            const meta = priorityMeta(project.priority);
                                            return (
                                                <Badge variant="outline" className={cn(meta.className)}>
                                                    {meta.label}
                                                </Badge>
                                            );
                                        })()}
                                    </TableCell>
                                    <TableCell>
                                        {(() => {
                                            const meta = projectStatusMeta(project);
                                            return (
                                                <Badge variant="outline" className={cn(meta.className)}>
                                                    {meta.label}
                                                </Badge>
                                            );
                                        })()}
                                    </TableCell>
                                    <TableCell>{formatDateTime(project.startDateTime)}</TableCell>
                                    <TableCell>{formatDateTime(project.createdAt)}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-1">
                                            <Button variant="ghost" size="sm" onClick={() => handleEdit(project)}>
                                                Edit
                                            </Button>
                                             
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className='text-green-500 hover:text-green-600'
                                                onClick={() => handleMarkDone(project)}
                                                disabled={Boolean(project.endDateTime) || isRowActionLoading(project.id, 'done')}
                                            >
                                                {isRowActionLoading(project.id, 'done') ? (
                                                    <Loader2 className="size-4 animate-spin" />
                                                ) : (
                                                    <CheckCheck className="size-4" />
                                                    // <>Done</>
                                                )}
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-destructive hover:text-destructive"
                                                onClick={() => handleDelete(project)}
                                                disabled={isRowActionLoading(project.id, 'delete')}
                                            >
                                                {isRowActionLoading(project.id, 'delete') ? (
                                                    <Loader2 className="size-4 animate-spin" />
                                                ) : (
                                                    // <Trash2 className="size-4" />
                                                    <>Del</>
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
    </div>
  )
}

export default Projects