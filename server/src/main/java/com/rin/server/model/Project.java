package com.rin.server.model;

import com.rin.server.model.enums.Priority;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "projects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // PK

    @Column(nullable = false, length = 200)
    private String name; // bắt buộc: tên project

    @Column(columnDefinition = "text")
    private String description; // optional: mô tả chi tiết

    @Column(name = "owner_name", length = 100)
    private String ownerName; // optional: người phụ trách chính

    @Enumerated(EnumType.STRING)
    private Priority priority;
    // optional: LOW / MEDIUM / HIGH

    private LocalDateTime startDateTime;  // optional: ngày bắt đầu kế hoạch
    private LocalDateTime endDateTime;    // optional: deadline/kết thúc


    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true,
    fetch = FetchType.LAZY)
    List<Task> tasks; // danh sách task thuộc project này

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt; // auto set

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt; // auto set khi update
}
