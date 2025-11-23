package com.rin.server.dto.response;

import com.rin.server.model.Project;
import com.rin.server.model.enums.Priority;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaskResponse {
    private Long id; // PK
    private String title; // bắt buộc: tên task
    private String description; // optional: mô tả chi tiết task
    private String assigneeName; // optional: người được giao (text tự nhập)
    private String reporterName; // optional: người tạo task / báo việc
    private Priority priority;
    // optional: LOW / MEDIUM / HIGH
    private LocalDateTime dueDateTime;  // optional: deadline
    private Boolean isDone = false; // trạng thái hoàn thành công việc
    private LocalDateTime createdAt; // auto set
    private LocalDateTime updatedAt; // auto set
}
