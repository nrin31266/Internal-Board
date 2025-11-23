package com.rin.server.model;

import com.rin.server.model.enums.Priority;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "tasks")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // PK

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project; // task thuộc project nào

    @Column(nullable = false, length = 200)
    private String title; // bắt buộc: tên task

    @Column(columnDefinition = "text")
    private String description; // optional: mô tả chi tiết task

    @Column(name = "assignee_name", length = 100)
    private String assigneeName; // optional: người được giao (text tự nhập)

    @Column(name = "reporter_name", length = 100)
    private String reporterName; // optional: người tạo task / báo việc


    @Enumerated(EnumType.STRING)
    private Priority priority;
    // optional: LOW / MEDIUM / HIGH

    private LocalDateTime dueDateTime;  // optional: deadline


    private Boolean isDone = false; // trạng thái hoàn thành công việc
    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt; // auto set

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt; // auto set

}
