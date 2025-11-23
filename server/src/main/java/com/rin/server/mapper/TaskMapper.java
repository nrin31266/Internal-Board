package com.rin.server.mapper;

import com.rin.server.dto.request.TaskForm;
import com.rin.server.dto.response.TaskResponse;
import com.rin.server.model.Task;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface TaskMapper {
    Task toTask(TaskForm taskForm);
    TaskResponse toResponse(Task task);
    void updateTask(@MappingTarget Task task, TaskForm taskForm);
}
