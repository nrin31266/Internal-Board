package com.rin.server.controller;

import com.rin.server.dto.ApiResponse;
import com.rin.server.dto.request.TaskForm;
import com.rin.server.dto.response.TaskResponse;
import com.rin.server.exception.BaseErrorCode;
import com.rin.server.exception.BaseException;
import com.rin.server.mapper.TaskMapper;
import com.rin.server.model.Project;
import com.rin.server.model.Task;
import com.rin.server.repository.ProjectRepository;
import com.rin.server.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = lombok.AccessLevel.PRIVATE)
public class TaskController {

    TaskRepository taskRepository;
    ProjectRepository projectRepository;
    TaskMapper taskMapper;

    @PostMapping
    public ApiResponse<TaskResponse> createTask(@RequestBody TaskForm taskForm) {
        Task task = taskMapper.toTask(taskForm);
        Project project = projectRepository.findById(taskForm.getProjectId())
                .orElseThrow(() -> new BaseException(BaseErrorCode.NOT_FOUND));
        task.setProject(project);
        Task savedTask = taskRepository.save(task);
        TaskResponse taskResponse = taskMapper.toResponse(savedTask);
        return ApiResponse.success(taskResponse, "Task created successfully");
    }

    @PutMapping("/{id}")
    public ApiResponse<TaskResponse> updateTask(@PathVariable Long id, @RequestBody TaskForm taskForm) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new BaseException(BaseErrorCode.NOT_FOUND));
        taskMapper.updateTask(task, taskForm);
        Task updatedTask = taskRepository.save(task);
        TaskResponse taskResponse = taskMapper.toResponse(updatedTask);
        return ApiResponse.success(taskResponse, "Task updated successfully");
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> deleteTask(@PathVariable Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new BaseException(BaseErrorCode.NOT_FOUND));
        taskRepository.delete(task);
        return ApiResponse.success(null, "Task deleted successfully");
    }
    @PostMapping("/{id}/done")
    public ApiResponse<TaskResponse> markTaskAsDone(@PathVariable Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new BaseException(BaseErrorCode.NOT_FOUND));
        task.setIsDone(true);
        Task updatedTask = taskRepository.save(task);
        TaskResponse taskResponse = taskMapper.toResponse(updatedTask);
        return ApiResponse.success(taskResponse, "Task marked as done successfully");
    }
}
