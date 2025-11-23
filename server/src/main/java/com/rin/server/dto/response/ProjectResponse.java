package com.rin.server.dto.response;

import com.rin.server.model.enums.Priority;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectResponse {
    private Long id;
    private String name; // bắt buộc: tên project
    private String description; // optional: mô tả chi tiết
    private String ownerName; // optional: người phụ trách chính
    private Priority priority;
    private LocalDateTime startDateTime;  // optional: ngày bắt đầu kế hoạch
    private  LocalDateTime endDateTime;    // optional: deadline/kết thúc
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
