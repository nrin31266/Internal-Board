package com.rin.server.mapper;

import com.rin.server.dto.request.ProjectForm;
import com.rin.server.dto.response.ProjectResponse;
import com.rin.server.dto.response.ProjectResponseV2;
import com.rin.server.model.Project;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.springframework.data.repository.query.Param;

@Mapper(componentModel = "spring")
public interface ProjectMapper {
    Project toEntity(ProjectForm projectForm);
    ProjectResponse toResponse(Project project);
    void updateProject(@MappingTarget Project project, ProjectForm projectForm);

    ProjectResponseV2 toResponseV2(Project project);
}
