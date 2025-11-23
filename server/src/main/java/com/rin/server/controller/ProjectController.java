package com.rin.server.controller;

import com.rin.server.dto.ApiResponse;
import com.rin.server.dto.request.ProjectForm;
import com.rin.server.dto.response.ProjectResponse;
import com.rin.server.dto.response.ProjectResponseV2;
import com.rin.server.mapper.ProjectMapper;
import com.rin.server.model.Project;
import com.rin.server.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = lombok.AccessLevel.PRIVATE)
public class ProjectController {
    ProjectRepository projectRepository;
    ProjectMapper projectMapper;

    @PostMapping
    public ApiResponse<ProjectResponse> save(@RequestBody ProjectForm projectForm) {
        Project project = projectMapper.toEntity(projectForm);
        Project savedProject = projectRepository.save(project);
        ProjectResponse projectResponse = projectMapper.toResponse(savedProject);
        return ApiResponse.success(projectResponse, "Project created successfully");
    }


    @GetMapping
    public ApiResponse<List<ProjectResponse>> getAll() {
        java.util.List<Project> projects = projectRepository.findProjects();
        java.util.List<ProjectResponse> projectResponses = projects.stream()
                .map(projectMapper::toResponse)
                .toList();
        return ApiResponse.success(projectResponses, "Projects retrieved successfully");
    }

    @GetMapping("/{id}" )
    public ApiResponse<ProjectResponse> getById(@PathVariable Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id: " + id));
        ProjectResponse projectResponse = projectMapper.toResponse(project);
        return ApiResponse.success(projectResponse, "Project retrieved successfully");
    }

    @PutMapping("/{id}")
    public ApiResponse<ProjectResponse> update(@PathVariable Long id, @RequestBody ProjectForm projectForm) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id: " + id));
        projectMapper.updateProject(project, projectForm);
        Project updatedProject = projectRepository.save(project);
        ProjectResponse projectResponse = projectMapper.toResponse(updatedProject);
        return ApiResponse.success(projectResponse, "Project updated successfully");
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id: " + id));
        projectRepository.delete(project);
        return ApiResponse.<Void>builder()
                .message("Project deleted successfully")
                .build();
    }

    @PostMapping("/{id}/done")
    public ApiResponse<ProjectResponse> markAsDone(@PathVariable Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id: " + id));
        project.setEndDateTime(LocalDateTime.now());
        Project updatedProject = projectRepository.save(project);
        ProjectResponse projectResponse = projectMapper.toResponse(updatedProject);
        return ApiResponse.success(projectResponse, "Project marked as done successfully");
    }

    @GetMapping("/{id}/with-tasks")
    public ApiResponse<ProjectResponseV2> getAllWithTasks(@PathVariable Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id: " + id));
        ProjectResponseV2 projectResponseV2 = projectMapper.toResponseV2(project);
        return ApiResponse.success(projectResponseV2, "Project with tasks retrieved successfully");
    }
}
