package com.rin.server.dto.request;

import com.rin.server.model.enums.Priority;
import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectForm {
    private String name; // bắt buộc: tên project
    private String description; // optional: mô tả chi tiết
    private String ownerName; // optional: người phụ trách chính
    private Priority priority;
    private LocalDateTime startDateTime;  // optional: ngày bắt đầu kế hoạch
}
