package com.rin.server.dto.request;

import com.rin.server.model.enums.Priority;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaskForm  {
    private Long projectId; // PK của project cha
    private String title; // bắt buộc: tên task
    private String description; // optional: mô tả chi tiết task
    private String assigneeName; // optional: người được giao (text tự nhập)
    private String reporterName; // optional: người tạo task / báo việc
    private Priority priority;
    // optional: LOW / MEDIUM / HIGH
    private LocalDateTime dueDateTime;  // optional: deadline
}
