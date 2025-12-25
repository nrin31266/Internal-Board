# TÌM HIỂU, TRIỂN KHAI VÀ CẤU HÌNH NỀN TẢNG DOCKER CONTAINER TRÊN HỆ ĐIỀU HÀNH UBUNTU

## 0) Mục tiêu đề tài
- Trình bày tổng quan Docker trên Ubuntu.
- Hướng dẫn triển khai, cấu hình, vận hành và xử lý sự cố.
- Tạo tài liệu học phần Linux/Ubuntu có thể dùng như sổ tay thực hành.

## 1) Tổng quan dự án Internal-Board
- Ứng dụng quản lý Project/Task gồm 3 dịch vụ: database, backend, frontend.
- Chạy bằng Docker Compose, phù hợp lab Linux/Ubuntu.

## 2) Kiến trúc hệ thống
```
Browser -> Nginx (client) -> Spring Boot (server) -> PostgreSQL (db)
```

## 3) Bảng tóm tắt thành phần
| Thành phần | Công nghệ | Cổng | Vai trò |
|---|---|---|---|
| Database | PostgreSQL 16 | 5432 | Lưu trữ dữ liệu |
| Backend | Spring Boot | 8080 | Cung cấp API |
| Frontend | React + Vite + Nginx | 5174 | Giao diện web |
| Orchestration | Docker Compose | - | Quản lý stack |

## 4) Môi trường Ubuntu khuyến nghị
- Ubuntu 20.04+
- Docker Engine + Docker Compose v2
- Git, Curl, Openssh (tùy nhu cầu)

## 5) Cấu trúc thư mục dự án
- `server/`: Backend Spring Boot.
- `client/`: Frontend React + Vite.
- `docker-compose.yml`: Khai báo dịch vụ.
- `deploy.sh`: Script vận hành tiện ích.

## 6) Các file cấu hình quan trọng
| File | Mục đích |
|---|---|
| `docker-compose.yml` | Định nghĩa services, networks, volumes |
| `server/src/main/resources/application.yml` | Cấu hình Spring Boot |
| `client/nginx.conf` | Cấu hình Nginx phục vụ frontend |
| `deploy.sh` | Script quản trị triển khai |

## 7) Cài đặt Docker trên Ubuntu
### 7.1) Cài Docker Engine
```
sudo apt update
sudo apt install -y docker.io
sudo systemctl enable --now docker
```
### 7.2) Cài Docker Compose v2
```
sudo apt install -y docker-compose-plugin
```
### 7.3) Kiểm tra phiên bản
```
docker --version
docker compose version
```

## 8) Pull source và chuẩn bị
```
git clone <repo-url>
cd Internal-Board
```

## 9) Triển khai nhanh bằng Docker Compose
```
docker compose up -d --build
```

- Truy cập frontend: http://localhost:5174
- Truy cập backend: http://localhost:8080

## 10) Triển khai bằng script deploy.sh
```
chmod +x deploy.sh
./deploy.sh deploy
```

## 11) Kiểm tra trạng thái service
```
docker compose ps
```

## 12) Xem log
```
docker compose logs -f server
```

## 13) Dừng/khởi động lại
```
docker compose down
./deploy.sh restart
```

## 14) Kiểm tra API cơ bản
```
curl http://localhost:8080/api/projects
```

## 15) Mục tiêu học phần (Linux/Ubuntu)
- Hiểu cơ chế containerization.
- Sử dụng Docker Compose để orchestration.
- Quản lý service, log, network, volume.
- Tự động hóa triển khai.

## 16) Chuyên đề 1: Nội dung thực hành
### 16.1) Mục tiêu
- Mục tiêu 1.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 1.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 1.3: ghi chú lại những lỗi phổ biến.

### 16.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 1.1 | Kiểm tra mục 1.1 | [ ] | |
| 1.2 | Kiểm tra mục 1.2 | [ ] | |
| 1.3 | Kiểm tra mục 1.3 | [ ] | |
| 1.4 | Kiểm tra mục 1.4 | [ ] | |
| 1.5 | Kiểm tra mục 1.5 | [ ] | |

### 16.3) Các bước thực hành
1. Bước 1.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 1.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 1.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 1.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 1.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 1.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 1.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 1.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 1.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 1.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 1.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 1.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 1.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 1.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 1.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 1.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 1.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 1.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 1.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 1.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 16.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 16.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 1.
- Hoàn thành checklist ở phần 16.2.

## 17) Chuyên đề 2: Nội dung thực hành
### 17.1) Mục tiêu
- Mục tiêu 2.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 2.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 2.3: ghi chú lại những lỗi phổ biến.

### 17.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 2.1 | Kiểm tra mục 2.1 | [ ] | |
| 2.2 | Kiểm tra mục 2.2 | [ ] | |
| 2.3 | Kiểm tra mục 2.3 | [ ] | |
| 2.4 | Kiểm tra mục 2.4 | [ ] | |
| 2.5 | Kiểm tra mục 2.5 | [ ] | |

### 17.3) Các bước thực hành
1. Bước 2.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 2.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 2.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 2.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 2.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 2.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 2.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 2.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 2.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 2.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 2.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 2.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 2.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 2.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 2.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 2.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 2.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 2.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 2.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 2.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 17.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 17.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 2.
- Hoàn thành checklist ở phần 17.2.

## 18) Chuyên đề 3: Nội dung thực hành
### 18.1) Mục tiêu
- Mục tiêu 3.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 3.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 3.3: ghi chú lại những lỗi phổ biến.

### 18.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 3.1 | Kiểm tra mục 3.1 | [ ] | |
| 3.2 | Kiểm tra mục 3.2 | [ ] | |
| 3.3 | Kiểm tra mục 3.3 | [ ] | |
| 3.4 | Kiểm tra mục 3.4 | [ ] | |
| 3.5 | Kiểm tra mục 3.5 | [ ] | |

### 18.3) Các bước thực hành
1. Bước 3.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 3.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 3.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 3.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 3.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 3.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 3.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 3.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 3.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 3.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 3.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 3.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 3.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 3.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 3.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 3.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 3.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 3.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 3.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 3.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 18.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 18.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 3.
- Hoàn thành checklist ở phần 18.2.

## 19) Chuyên đề 4: Nội dung thực hành
### 19.1) Mục tiêu
- Mục tiêu 4.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 4.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 4.3: ghi chú lại những lỗi phổ biến.

### 19.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 4.1 | Kiểm tra mục 4.1 | [ ] | |
| 4.2 | Kiểm tra mục 4.2 | [ ] | |
| 4.3 | Kiểm tra mục 4.3 | [ ] | |
| 4.4 | Kiểm tra mục 4.4 | [ ] | |
| 4.5 | Kiểm tra mục 4.5 | [ ] | |

### 19.3) Các bước thực hành
1. Bước 4.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 4.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 4.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 4.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 4.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 4.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 4.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 4.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 4.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 4.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 4.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 4.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 4.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 4.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 4.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 4.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 4.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 4.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 4.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 4.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 19.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 19.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 4.
- Hoàn thành checklist ở phần 19.2.

## 20) Chuyên đề 5: Nội dung thực hành
### 20.1) Mục tiêu
- Mục tiêu 5.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 5.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 5.3: ghi chú lại những lỗi phổ biến.

### 20.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 5.1 | Kiểm tra mục 5.1 | [ ] | |
| 5.2 | Kiểm tra mục 5.2 | [ ] | |
| 5.3 | Kiểm tra mục 5.3 | [ ] | |
| 5.4 | Kiểm tra mục 5.4 | [ ] | |
| 5.5 | Kiểm tra mục 5.5 | [ ] | |

### 20.3) Các bước thực hành
1. Bước 5.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 5.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 5.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 5.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 5.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 5.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 5.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 5.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 5.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 5.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 5.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 5.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 5.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 5.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 5.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 5.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 5.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 5.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 5.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 5.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 20.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 20.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 5.
- Hoàn thành checklist ở phần 20.2.

## 21) Chuyên đề 6: Nội dung thực hành
### 21.1) Mục tiêu
- Mục tiêu 6.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 6.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 6.3: ghi chú lại những lỗi phổ biến.

### 21.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 6.1 | Kiểm tra mục 6.1 | [ ] | |
| 6.2 | Kiểm tra mục 6.2 | [ ] | |
| 6.3 | Kiểm tra mục 6.3 | [ ] | |
| 6.4 | Kiểm tra mục 6.4 | [ ] | |
| 6.5 | Kiểm tra mục 6.5 | [ ] | |

### 21.3) Các bước thực hành
1. Bước 6.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 6.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 6.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 6.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 6.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 6.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 6.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 6.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 6.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 6.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 6.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 6.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 6.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 6.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 6.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 6.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 6.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 6.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 6.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 6.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 21.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 21.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 6.
- Hoàn thành checklist ở phần 21.2.

## 22) Chuyên đề 7: Nội dung thực hành
### 22.1) Mục tiêu
- Mục tiêu 7.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 7.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 7.3: ghi chú lại những lỗi phổ biến.

### 22.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 7.1 | Kiểm tra mục 7.1 | [ ] | |
| 7.2 | Kiểm tra mục 7.2 | [ ] | |
| 7.3 | Kiểm tra mục 7.3 | [ ] | |
| 7.4 | Kiểm tra mục 7.4 | [ ] | |
| 7.5 | Kiểm tra mục 7.5 | [ ] | |

### 22.3) Các bước thực hành
1. Bước 7.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 7.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 7.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 7.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 7.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 7.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 7.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 7.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 7.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 7.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 7.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 7.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 7.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 7.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 7.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 7.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 7.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 7.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 7.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 7.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 22.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 22.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 7.
- Hoàn thành checklist ở phần 22.2.

## 23) Chuyên đề 8: Nội dung thực hành
### 23.1) Mục tiêu
- Mục tiêu 8.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 8.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 8.3: ghi chú lại những lỗi phổ biến.

### 23.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 8.1 | Kiểm tra mục 8.1 | [ ] | |
| 8.2 | Kiểm tra mục 8.2 | [ ] | |
| 8.3 | Kiểm tra mục 8.3 | [ ] | |
| 8.4 | Kiểm tra mục 8.4 | [ ] | |
| 8.5 | Kiểm tra mục 8.5 | [ ] | |

### 23.3) Các bước thực hành
1. Bước 8.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 8.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 8.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 8.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 8.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 8.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 8.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 8.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 8.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 8.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 8.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 8.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 8.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 8.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 8.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 8.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 8.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 8.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 8.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 8.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 23.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 23.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 8.
- Hoàn thành checklist ở phần 23.2.

## 24) Chuyên đề 9: Nội dung thực hành
### 24.1) Mục tiêu
- Mục tiêu 9.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 9.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 9.3: ghi chú lại những lỗi phổ biến.

### 24.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 9.1 | Kiểm tra mục 9.1 | [ ] | |
| 9.2 | Kiểm tra mục 9.2 | [ ] | |
| 9.3 | Kiểm tra mục 9.3 | [ ] | |
| 9.4 | Kiểm tra mục 9.4 | [ ] | |
| 9.5 | Kiểm tra mục 9.5 | [ ] | |

### 24.3) Các bước thực hành
1. Bước 9.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 9.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 9.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 9.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 9.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 9.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 9.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 9.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 9.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 9.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 9.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 9.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 9.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 9.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 9.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 9.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 9.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 9.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 9.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 9.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 24.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 24.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 9.
- Hoàn thành checklist ở phần 24.2.

## 25) Chuyên đề 10: Nội dung thực hành
### 25.1) Mục tiêu
- Mục tiêu 10.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 10.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 10.3: ghi chú lại những lỗi phổ biến.

### 25.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 10.1 | Kiểm tra mục 10.1 | [ ] | |
| 10.2 | Kiểm tra mục 10.2 | [ ] | |
| 10.3 | Kiểm tra mục 10.3 | [ ] | |
| 10.4 | Kiểm tra mục 10.4 | [ ] | |
| 10.5 | Kiểm tra mục 10.5 | [ ] | |

### 25.3) Các bước thực hành
1. Bước 10.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 10.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 10.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 10.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 10.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 10.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 10.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 10.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 10.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 10.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 10.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 10.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 10.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 10.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 10.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 10.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 10.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 10.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 10.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 10.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 25.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 25.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 10.
- Hoàn thành checklist ở phần 25.2.

## 26) Chuyên đề 11: Nội dung thực hành
### 26.1) Mục tiêu
- Mục tiêu 11.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 11.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 11.3: ghi chú lại những lỗi phổ biến.

### 26.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 11.1 | Kiểm tra mục 11.1 | [ ] | |
| 11.2 | Kiểm tra mục 11.2 | [ ] | |
| 11.3 | Kiểm tra mục 11.3 | [ ] | |
| 11.4 | Kiểm tra mục 11.4 | [ ] | |
| 11.5 | Kiểm tra mục 11.5 | [ ] | |

### 26.3) Các bước thực hành
1. Bước 11.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 11.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 11.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 11.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 11.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 11.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 11.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 11.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 11.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 11.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 11.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 11.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 11.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 11.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 11.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 11.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 11.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 11.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 11.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 11.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 26.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 26.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 11.
- Hoàn thành checklist ở phần 26.2.

## 27) Chuyên đề 12: Nội dung thực hành
### 27.1) Mục tiêu
- Mục tiêu 12.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 12.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 12.3: ghi chú lại những lỗi phổ biến.

### 27.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 12.1 | Kiểm tra mục 12.1 | [ ] | |
| 12.2 | Kiểm tra mục 12.2 | [ ] | |
| 12.3 | Kiểm tra mục 12.3 | [ ] | |
| 12.4 | Kiểm tra mục 12.4 | [ ] | |
| 12.5 | Kiểm tra mục 12.5 | [ ] | |

### 27.3) Các bước thực hành
1. Bước 12.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 12.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 12.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 12.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 12.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 12.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 12.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 12.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 12.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 12.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 12.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 12.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 12.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 12.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 12.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 12.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 12.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 12.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 12.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 12.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 27.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 27.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 12.
- Hoàn thành checklist ở phần 27.2.

## 28) Chuyên đề 13: Nội dung thực hành
### 28.1) Mục tiêu
- Mục tiêu 13.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 13.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 13.3: ghi chú lại những lỗi phổ biến.

### 28.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 13.1 | Kiểm tra mục 13.1 | [ ] | |
| 13.2 | Kiểm tra mục 13.2 | [ ] | |
| 13.3 | Kiểm tra mục 13.3 | [ ] | |
| 13.4 | Kiểm tra mục 13.4 | [ ] | |
| 13.5 | Kiểm tra mục 13.5 | [ ] | |

### 28.3) Các bước thực hành
1. Bước 13.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 13.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 13.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 13.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 13.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 13.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 13.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 13.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 13.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 13.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 13.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 13.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 13.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 13.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 13.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 13.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 13.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 13.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 13.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 13.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 28.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 28.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 13.
- Hoàn thành checklist ở phần 28.2.

## 29) Chuyên đề 14: Nội dung thực hành
### 29.1) Mục tiêu
- Mục tiêu 14.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 14.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 14.3: ghi chú lại những lỗi phổ biến.

### 29.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 14.1 | Kiểm tra mục 14.1 | [ ] | |
| 14.2 | Kiểm tra mục 14.2 | [ ] | |
| 14.3 | Kiểm tra mục 14.3 | [ ] | |
| 14.4 | Kiểm tra mục 14.4 | [ ] | |
| 14.5 | Kiểm tra mục 14.5 | [ ] | |

### 29.3) Các bước thực hành
1. Bước 14.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 14.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 14.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 14.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 14.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 14.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 14.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 14.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 14.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 14.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 14.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 14.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 14.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 14.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 14.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 14.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 14.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 14.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 14.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 14.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 29.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 29.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 14.
- Hoàn thành checklist ở phần 29.2.

## 30) Chuyên đề 15: Nội dung thực hành
### 30.1) Mục tiêu
- Mục tiêu 15.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 15.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 15.3: ghi chú lại những lỗi phổ biến.

### 30.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 15.1 | Kiểm tra mục 15.1 | [ ] | |
| 15.2 | Kiểm tra mục 15.2 | [ ] | |
| 15.3 | Kiểm tra mục 15.3 | [ ] | |
| 15.4 | Kiểm tra mục 15.4 | [ ] | |
| 15.5 | Kiểm tra mục 15.5 | [ ] | |

### 30.3) Các bước thực hành
1. Bước 15.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 15.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 15.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 15.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 15.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 15.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 15.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 15.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 15.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 15.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 15.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 15.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 15.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 15.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 15.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 15.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 15.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 15.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 15.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 15.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 30.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 30.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 15.
- Hoàn thành checklist ở phần 30.2.

## 31) Chuyên đề 16: Nội dung thực hành
### 31.1) Mục tiêu
- Mục tiêu 16.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 16.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 16.3: ghi chú lại những lỗi phổ biến.

### 31.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 16.1 | Kiểm tra mục 16.1 | [ ] | |
| 16.2 | Kiểm tra mục 16.2 | [ ] | |
| 16.3 | Kiểm tra mục 16.3 | [ ] | |
| 16.4 | Kiểm tra mục 16.4 | [ ] | |
| 16.5 | Kiểm tra mục 16.5 | [ ] | |

### 31.3) Các bước thực hành
1. Bước 16.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 16.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 16.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 16.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 16.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 16.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 16.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 16.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 16.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 16.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 16.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 16.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 16.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 16.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 16.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 16.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 16.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 16.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 16.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 16.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 31.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 31.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 16.
- Hoàn thành checklist ở phần 31.2.

## 32) Chuyên đề 17: Nội dung thực hành
### 32.1) Mục tiêu
- Mục tiêu 17.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 17.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 17.3: ghi chú lại những lỗi phổ biến.

### 32.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 17.1 | Kiểm tra mục 17.1 | [ ] | |
| 17.2 | Kiểm tra mục 17.2 | [ ] | |
| 17.3 | Kiểm tra mục 17.3 | [ ] | |
| 17.4 | Kiểm tra mục 17.4 | [ ] | |
| 17.5 | Kiểm tra mục 17.5 | [ ] | |

### 32.3) Các bước thực hành
1. Bước 17.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 17.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 17.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 17.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 17.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 17.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 17.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 17.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 17.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 17.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 17.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 17.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 17.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 17.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 17.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 17.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 17.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 17.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 17.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 17.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 32.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 32.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 17.
- Hoàn thành checklist ở phần 32.2.

## 33) Chuyên đề 18: Nội dung thực hành
### 33.1) Mục tiêu
- Mục tiêu 18.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 18.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 18.3: ghi chú lại những lỗi phổ biến.

### 33.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 18.1 | Kiểm tra mục 18.1 | [ ] | |
| 18.2 | Kiểm tra mục 18.2 | [ ] | |
| 18.3 | Kiểm tra mục 18.3 | [ ] | |
| 18.4 | Kiểm tra mục 18.4 | [ ] | |
| 18.5 | Kiểm tra mục 18.5 | [ ] | |

### 33.3) Các bước thực hành
1. Bước 18.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 18.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 18.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 18.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 18.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 18.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 18.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 18.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 18.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 18.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 18.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 18.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 18.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 18.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 18.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 18.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 18.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 18.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 18.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 18.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 33.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 33.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 18.
- Hoàn thành checklist ở phần 33.2.

## 34) Chuyên đề 19: Nội dung thực hành
### 34.1) Mục tiêu
- Mục tiêu 19.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 19.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 19.3: ghi chú lại những lỗi phổ biến.

### 34.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 19.1 | Kiểm tra mục 19.1 | [ ] | |
| 19.2 | Kiểm tra mục 19.2 | [ ] | |
| 19.3 | Kiểm tra mục 19.3 | [ ] | |
| 19.4 | Kiểm tra mục 19.4 | [ ] | |
| 19.5 | Kiểm tra mục 19.5 | [ ] | |

### 34.3) Các bước thực hành
1. Bước 19.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 19.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 19.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 19.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 19.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 19.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 19.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 19.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 19.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 19.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 19.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 19.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 19.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 19.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 19.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 19.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 19.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 19.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 19.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 19.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 34.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 34.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 19.
- Hoàn thành checklist ở phần 34.2.

## 35) Chuyên đề 20: Nội dung thực hành
### 35.1) Mục tiêu
- Mục tiêu 20.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 20.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 20.3: ghi chú lại những lỗi phổ biến.

### 35.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 20.1 | Kiểm tra mục 20.1 | [ ] | |
| 20.2 | Kiểm tra mục 20.2 | [ ] | |
| 20.3 | Kiểm tra mục 20.3 | [ ] | |
| 20.4 | Kiểm tra mục 20.4 | [ ] | |
| 20.5 | Kiểm tra mục 20.5 | [ ] | |

### 35.3) Các bước thực hành
1. Bước 20.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 20.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 20.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 20.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 20.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 20.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 20.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 20.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 20.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 20.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 20.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 20.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 20.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 20.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 20.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 20.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 20.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 20.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 20.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 20.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 35.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 35.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 20.
- Hoàn thành checklist ở phần 35.2.

## 36) Chuyên đề 21: Nội dung thực hành
### 36.1) Mục tiêu
- Mục tiêu 21.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 21.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 21.3: ghi chú lại những lỗi phổ biến.

### 36.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 21.1 | Kiểm tra mục 21.1 | [ ] | |
| 21.2 | Kiểm tra mục 21.2 | [ ] | |
| 21.3 | Kiểm tra mục 21.3 | [ ] | |
| 21.4 | Kiểm tra mục 21.4 | [ ] | |
| 21.5 | Kiểm tra mục 21.5 | [ ] | |

### 36.3) Các bước thực hành
1. Bước 21.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 21.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 21.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 21.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 21.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 21.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 21.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 21.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 21.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 21.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 21.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 21.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 21.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 21.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 21.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 21.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 21.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 21.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 21.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 21.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 36.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 36.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 21.
- Hoàn thành checklist ở phần 36.2.

## 37) Chuyên đề 22: Nội dung thực hành
### 37.1) Mục tiêu
- Mục tiêu 22.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 22.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 22.3: ghi chú lại những lỗi phổ biến.

### 37.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 22.1 | Kiểm tra mục 22.1 | [ ] | |
| 22.2 | Kiểm tra mục 22.2 | [ ] | |
| 22.3 | Kiểm tra mục 22.3 | [ ] | |
| 22.4 | Kiểm tra mục 22.4 | [ ] | |
| 22.5 | Kiểm tra mục 22.5 | [ ] | |

### 37.3) Các bước thực hành
1. Bước 22.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 22.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 22.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 22.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 22.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 22.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 22.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 22.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 22.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 22.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 22.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 22.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 22.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 22.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 22.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 22.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 22.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 22.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 22.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 22.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 37.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 37.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 22.
- Hoàn thành checklist ở phần 37.2.

## 38) Chuyên đề 23: Nội dung thực hành
### 38.1) Mục tiêu
- Mục tiêu 23.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 23.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 23.3: ghi chú lại những lỗi phổ biến.

### 38.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 23.1 | Kiểm tra mục 23.1 | [ ] | |
| 23.2 | Kiểm tra mục 23.2 | [ ] | |
| 23.3 | Kiểm tra mục 23.3 | [ ] | |
| 23.4 | Kiểm tra mục 23.4 | [ ] | |
| 23.5 | Kiểm tra mục 23.5 | [ ] | |

### 38.3) Các bước thực hành
1. Bước 23.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 23.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 23.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 23.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 23.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 23.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 23.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 23.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 23.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 23.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 23.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 23.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 23.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 23.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 23.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 23.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 23.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 23.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 23.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 23.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 38.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 38.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 23.
- Hoàn thành checklist ở phần 38.2.

## 39) Chuyên đề 24: Nội dung thực hành
### 39.1) Mục tiêu
- Mục tiêu 24.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 24.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 24.3: ghi chú lại những lỗi phổ biến.

### 39.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 24.1 | Kiểm tra mục 24.1 | [ ] | |
| 24.2 | Kiểm tra mục 24.2 | [ ] | |
| 24.3 | Kiểm tra mục 24.3 | [ ] | |
| 24.4 | Kiểm tra mục 24.4 | [ ] | |
| 24.5 | Kiểm tra mục 24.5 | [ ] | |

### 39.3) Các bước thực hành
1. Bước 24.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 24.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 24.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 24.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 24.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 24.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 24.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 24.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 24.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 24.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 24.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 24.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 24.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 24.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 24.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 24.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 24.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 24.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 24.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 24.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 39.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 39.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 24.
- Hoàn thành checklist ở phần 39.2.

## 40) Chuyên đề 25: Nội dung thực hành
### 40.1) Mục tiêu
- Mục tiêu 25.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 25.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 25.3: ghi chú lại những lỗi phổ biến.

### 40.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 25.1 | Kiểm tra mục 25.1 | [ ] | |
| 25.2 | Kiểm tra mục 25.2 | [ ] | |
| 25.3 | Kiểm tra mục 25.3 | [ ] | |
| 25.4 | Kiểm tra mục 25.4 | [ ] | |
| 25.5 | Kiểm tra mục 25.5 | [ ] | |

### 40.3) Các bước thực hành
1. Bước 25.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 25.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 25.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 25.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 25.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 25.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 25.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 25.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 25.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 25.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 25.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 25.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 25.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 25.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 25.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 25.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 25.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 25.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 25.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 25.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 40.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 40.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 25.
- Hoàn thành checklist ở phần 40.2.

## 41) Chuyên đề 26: Nội dung thực hành
### 41.1) Mục tiêu
- Mục tiêu 26.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 26.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 26.3: ghi chú lại những lỗi phổ biến.

### 41.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 26.1 | Kiểm tra mục 26.1 | [ ] | |
| 26.2 | Kiểm tra mục 26.2 | [ ] | |
| 26.3 | Kiểm tra mục 26.3 | [ ] | |
| 26.4 | Kiểm tra mục 26.4 | [ ] | |
| 26.5 | Kiểm tra mục 26.5 | [ ] | |

### 41.3) Các bước thực hành
1. Bước 26.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 26.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 26.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 26.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 26.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 26.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 26.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 26.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 26.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 26.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 26.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 26.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 26.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 26.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 26.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 26.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 26.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 26.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 26.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 26.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 41.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 41.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 26.
- Hoàn thành checklist ở phần 41.2.

## 42) Chuyên đề 27: Nội dung thực hành
### 42.1) Mục tiêu
- Mục tiêu 27.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 27.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 27.3: ghi chú lại những lỗi phổ biến.

### 42.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 27.1 | Kiểm tra mục 27.1 | [ ] | |
| 27.2 | Kiểm tra mục 27.2 | [ ] | |
| 27.3 | Kiểm tra mục 27.3 | [ ] | |
| 27.4 | Kiểm tra mục 27.4 | [ ] | |
| 27.5 | Kiểm tra mục 27.5 | [ ] | |

### 42.3) Các bước thực hành
1. Bước 27.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 27.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 27.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 27.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 27.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 27.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 27.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 27.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 27.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 27.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 27.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 27.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 27.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 27.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 27.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 27.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 27.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 27.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 27.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 27.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 42.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 42.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 27.
- Hoàn thành checklist ở phần 42.2.

## 43) Chuyên đề 28: Nội dung thực hành
### 43.1) Mục tiêu
- Mục tiêu 28.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 28.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 28.3: ghi chú lại những lỗi phổ biến.

### 43.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 28.1 | Kiểm tra mục 28.1 | [ ] | |
| 28.2 | Kiểm tra mục 28.2 | [ ] | |
| 28.3 | Kiểm tra mục 28.3 | [ ] | |
| 28.4 | Kiểm tra mục 28.4 | [ ] | |
| 28.5 | Kiểm tra mục 28.5 | [ ] | |

### 43.3) Các bước thực hành
1. Bước 28.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 28.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 28.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 28.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 28.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 28.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 28.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 28.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 28.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 28.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 28.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 28.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 28.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 28.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 28.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 28.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 28.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 28.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 28.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 28.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 43.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 43.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 28.
- Hoàn thành checklist ở phần 43.2.

## 44) Chuyên đề 29: Nội dung thực hành
### 44.1) Mục tiêu
- Mục tiêu 29.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 29.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 29.3: ghi chú lại những lỗi phổ biến.

### 44.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 29.1 | Kiểm tra mục 29.1 | [ ] | |
| 29.2 | Kiểm tra mục 29.2 | [ ] | |
| 29.3 | Kiểm tra mục 29.3 | [ ] | |
| 29.4 | Kiểm tra mục 29.4 | [ ] | |
| 29.5 | Kiểm tra mục 29.5 | [ ] | |

### 44.3) Các bước thực hành
1. Bước 29.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 29.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 29.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 29.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 29.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 29.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 29.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 29.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 29.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 29.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 29.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 29.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 29.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 29.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 29.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 29.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 29.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 29.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 29.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 29.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 44.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 44.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 29.
- Hoàn thành checklist ở phần 44.2.

## 45) Chuyên đề 30: Nội dung thực hành
### 45.1) Mục tiêu
- Mục tiêu 30.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 30.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 30.3: ghi chú lại những lỗi phổ biến.

### 45.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 30.1 | Kiểm tra mục 30.1 | [ ] | |
| 30.2 | Kiểm tra mục 30.2 | [ ] | |
| 30.3 | Kiểm tra mục 30.3 | [ ] | |
| 30.4 | Kiểm tra mục 30.4 | [ ] | |
| 30.5 | Kiểm tra mục 30.5 | [ ] | |

### 45.3) Các bước thực hành
1. Bước 30.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 30.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 30.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 30.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 30.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 30.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 30.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 30.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 30.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 30.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 30.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 30.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 30.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 30.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 30.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 30.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 30.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 30.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 30.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 30.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 45.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 45.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 30.
- Hoàn thành checklist ở phần 45.2.

## 46) Chuyên đề 31: Nội dung thực hành
### 46.1) Mục tiêu
- Mục tiêu 31.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 31.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 31.3: ghi chú lại những lỗi phổ biến.

### 46.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 31.1 | Kiểm tra mục 31.1 | [ ] | |
| 31.2 | Kiểm tra mục 31.2 | [ ] | |
| 31.3 | Kiểm tra mục 31.3 | [ ] | |
| 31.4 | Kiểm tra mục 31.4 | [ ] | |
| 31.5 | Kiểm tra mục 31.5 | [ ] | |

### 46.3) Các bước thực hành
1. Bước 31.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 31.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 31.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 31.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 31.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 31.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 31.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 31.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 31.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 31.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 31.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 31.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 31.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 31.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 31.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 31.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 31.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 31.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 31.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 31.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 46.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 46.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 31.
- Hoàn thành checklist ở phần 46.2.

## 47) Chuyên đề 32: Nội dung thực hành
### 47.1) Mục tiêu
- Mục tiêu 32.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 32.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 32.3: ghi chú lại những lỗi phổ biến.

### 47.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 32.1 | Kiểm tra mục 32.1 | [ ] | |
| 32.2 | Kiểm tra mục 32.2 | [ ] | |
| 32.3 | Kiểm tra mục 32.3 | [ ] | |
| 32.4 | Kiểm tra mục 32.4 | [ ] | |
| 32.5 | Kiểm tra mục 32.5 | [ ] | |

### 47.3) Các bước thực hành
1. Bước 32.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 32.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 32.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 32.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 32.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 32.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 32.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 32.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 32.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 32.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 32.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 32.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 32.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 32.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 32.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 32.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 32.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 32.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 32.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 32.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 47.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 47.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 32.
- Hoàn thành checklist ở phần 47.2.

## 48) Chuyên đề 33: Nội dung thực hành
### 48.1) Mục tiêu
- Mục tiêu 33.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 33.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 33.3: ghi chú lại những lỗi phổ biến.

### 48.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 33.1 | Kiểm tra mục 33.1 | [ ] | |
| 33.2 | Kiểm tra mục 33.2 | [ ] | |
| 33.3 | Kiểm tra mục 33.3 | [ ] | |
| 33.4 | Kiểm tra mục 33.4 | [ ] | |
| 33.5 | Kiểm tra mục 33.5 | [ ] | |

### 48.3) Các bước thực hành
1. Bước 33.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 33.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 33.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 33.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 33.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 33.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 33.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 33.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 33.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 33.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 33.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 33.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 33.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 33.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 33.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 33.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 33.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 33.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 33.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 33.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 48.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 48.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 33.
- Hoàn thành checklist ở phần 48.2.

## 49) Chuyên đề 34: Nội dung thực hành
### 49.1) Mục tiêu
- Mục tiêu 34.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 34.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 34.3: ghi chú lại những lỗi phổ biến.

### 49.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 34.1 | Kiểm tra mục 34.1 | [ ] | |
| 34.2 | Kiểm tra mục 34.2 | [ ] | |
| 34.3 | Kiểm tra mục 34.3 | [ ] | |
| 34.4 | Kiểm tra mục 34.4 | [ ] | |
| 34.5 | Kiểm tra mục 34.5 | [ ] | |

### 49.3) Các bước thực hành
1. Bước 34.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 34.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 34.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 34.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 34.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 34.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 34.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 34.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 34.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 34.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 34.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 34.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 34.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 34.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 34.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 34.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 34.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 34.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 34.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 34.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 49.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 49.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 34.
- Hoàn thành checklist ở phần 49.2.

## 50) Chuyên đề 35: Nội dung thực hành
### 50.1) Mục tiêu
- Mục tiêu 35.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 35.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 35.3: ghi chú lại những lỗi phổ biến.

### 50.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 35.1 | Kiểm tra mục 35.1 | [ ] | |
| 35.2 | Kiểm tra mục 35.2 | [ ] | |
| 35.3 | Kiểm tra mục 35.3 | [ ] | |
| 35.4 | Kiểm tra mục 35.4 | [ ] | |
| 35.5 | Kiểm tra mục 35.5 | [ ] | |

### 50.3) Các bước thực hành
1. Bước 35.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 35.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 35.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 35.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 35.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 35.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 35.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 35.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 35.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 35.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 35.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 35.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 35.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 35.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 35.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 35.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 35.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 35.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 35.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 35.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 50.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 50.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 35.
- Hoàn thành checklist ở phần 50.2.

## 51) Chuyên đề 36: Nội dung thực hành
### 51.1) Mục tiêu
- Mục tiêu 36.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 36.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 36.3: ghi chú lại những lỗi phổ biến.

### 51.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 36.1 | Kiểm tra mục 36.1 | [ ] | |
| 36.2 | Kiểm tra mục 36.2 | [ ] | |
| 36.3 | Kiểm tra mục 36.3 | [ ] | |
| 36.4 | Kiểm tra mục 36.4 | [ ] | |
| 36.5 | Kiểm tra mục 36.5 | [ ] | |

### 51.3) Các bước thực hành
1. Bước 36.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 36.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 36.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 36.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 36.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 36.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 36.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 36.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 36.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 36.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 36.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 36.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 36.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 36.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 36.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 36.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 36.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 36.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 36.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 36.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 51.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 51.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 36.
- Hoàn thành checklist ở phần 51.2.

## 52) Chuyên đề 37: Nội dung thực hành
### 52.1) Mục tiêu
- Mục tiêu 37.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 37.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 37.3: ghi chú lại những lỗi phổ biến.

### 52.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 37.1 | Kiểm tra mục 37.1 | [ ] | |
| 37.2 | Kiểm tra mục 37.2 | [ ] | |
| 37.3 | Kiểm tra mục 37.3 | [ ] | |
| 37.4 | Kiểm tra mục 37.4 | [ ] | |
| 37.5 | Kiểm tra mục 37.5 | [ ] | |

### 52.3) Các bước thực hành
1. Bước 37.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 37.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 37.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 37.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 37.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 37.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 37.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 37.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 37.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 37.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 37.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 37.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 37.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 37.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 37.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 37.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 37.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 37.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 37.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 37.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 52.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 52.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 37.
- Hoàn thành checklist ở phần 52.2.

## 53) Chuyên đề 38: Nội dung thực hành
### 53.1) Mục tiêu
- Mục tiêu 38.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 38.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 38.3: ghi chú lại những lỗi phổ biến.

### 53.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 38.1 | Kiểm tra mục 38.1 | [ ] | |
| 38.2 | Kiểm tra mục 38.2 | [ ] | |
| 38.3 | Kiểm tra mục 38.3 | [ ] | |
| 38.4 | Kiểm tra mục 38.4 | [ ] | |
| 38.5 | Kiểm tra mục 38.5 | [ ] | |

### 53.3) Các bước thực hành
1. Bước 38.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 38.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 38.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 38.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 38.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 38.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 38.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 38.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 38.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 38.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 38.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 38.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 38.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 38.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 38.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 38.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 38.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 38.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 38.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 38.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 53.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 53.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 38.
- Hoàn thành checklist ở phần 53.2.

## 54) Chuyên đề 39: Nội dung thực hành
### 54.1) Mục tiêu
- Mục tiêu 39.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 39.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 39.3: ghi chú lại những lỗi phổ biến.

### 54.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 39.1 | Kiểm tra mục 39.1 | [ ] | |
| 39.2 | Kiểm tra mục 39.2 | [ ] | |
| 39.3 | Kiểm tra mục 39.3 | [ ] | |
| 39.4 | Kiểm tra mục 39.4 | [ ] | |
| 39.5 | Kiểm tra mục 39.5 | [ ] | |

### 54.3) Các bước thực hành
1. Bước 39.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 39.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 39.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 39.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 39.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 39.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 39.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 39.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 39.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 39.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 39.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 39.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 39.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 39.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 39.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 39.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 39.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 39.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 39.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 39.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 54.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 54.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 39.
- Hoàn thành checklist ở phần 54.2.

## 55) Chuyên đề 40: Nội dung thực hành
### 55.1) Mục tiêu
- Mục tiêu 40.1: hiểu khái niệm liên quan Docker trên Ubuntu.
- Mục tiêu 40.2: thao tác câu lệnh và kiểm tra kết quả.
- Mục tiêu 40.3: ghi chú lại những lỗi phổ biến.

### 55.2) Bảng kiểm kiến thức
| Hạng mục | Mô tả | Trạng thái | Ghi chú |
|---|---|---|---|
| 40.1 | Kiểm tra mục 40.1 | [ ] | |
| 40.2 | Kiểm tra mục 40.2 | [ ] | |
| 40.3 | Kiểm tra mục 40.3 | [ ] | |
| 40.4 | Kiểm tra mục 40.4 | [ ] | |
| 40.5 | Kiểm tra mục 40.5 | [ ] | |

### 55.3) Các bước thực hành
1. Bước 40.1: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
2. Bước 40.2: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
3. Bước 40.3: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
4. Bước 40.4: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
5. Bước 40.5: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
6. Bước 40.6: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
7. Bước 40.7: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
8. Bước 40.8: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
9. Bước 40.9: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
10. Bước 40.10: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
11. Bước 40.11: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
12. Bước 40.12: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
13. Bước 40.13: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
14. Bước 40.14: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
15. Bước 40.15: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
16. Bước 40.16: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
17. Bước 40.17: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
18. Bước 40.18: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
19. Bước 40.19: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.
20. Bước 40.20: Thực hiện thao tác mẫu trên Ubuntu và ghi nhận kết quả.

### 55.4) Câu lệnh minh họa
```
# ví dụ minh họa (thay đổi theo bài học)
docker ps -a
```

### 55.5) Kết quả mong đợi
- Có thể mô tả lại mục tiêu chuyên đề 40.
- Hoàn thành checklist ở phần 55.2.

## Phụ lục A: Checklist tổng hợp
| STT | Hạng mục | Trạng thái | Ghi chú |
|---|---|---|---|
| 1 | Kiểm tra cấu hình/lệnh 1 | [ ] | |
| 2 | Kiểm tra cấu hình/lệnh 2 | [ ] | |
| 3 | Kiểm tra cấu hình/lệnh 3 | [ ] | |
| 4 | Kiểm tra cấu hình/lệnh 4 | [ ] | |
| 5 | Kiểm tra cấu hình/lệnh 5 | [ ] | |
| 6 | Kiểm tra cấu hình/lệnh 6 | [ ] | |
| 7 | Kiểm tra cấu hình/lệnh 7 | [ ] | |
| 8 | Kiểm tra cấu hình/lệnh 8 | [ ] | |
| 9 | Kiểm tra cấu hình/lệnh 9 | [ ] | |
| 10 | Kiểm tra cấu hình/lệnh 10 | [ ] | |
| 11 | Kiểm tra cấu hình/lệnh 11 | [ ] | |
| 12 | Kiểm tra cấu hình/lệnh 12 | [ ] | |
| 13 | Kiểm tra cấu hình/lệnh 13 | [ ] | |
| 14 | Kiểm tra cấu hình/lệnh 14 | [ ] | |
| 15 | Kiểm tra cấu hình/lệnh 15 | [ ] | |
| 16 | Kiểm tra cấu hình/lệnh 16 | [ ] | |
| 17 | Kiểm tra cấu hình/lệnh 17 | [ ] | |
| 18 | Kiểm tra cấu hình/lệnh 18 | [ ] | |
| 19 | Kiểm tra cấu hình/lệnh 19 | [ ] | |
| 20 | Kiểm tra cấu hình/lệnh 20 | [ ] | |
| 21 | Kiểm tra cấu hình/lệnh 21 | [ ] | |
| 22 | Kiểm tra cấu hình/lệnh 22 | [ ] | |
| 23 | Kiểm tra cấu hình/lệnh 23 | [ ] | |
| 24 | Kiểm tra cấu hình/lệnh 24 | [ ] | |
| 25 | Kiểm tra cấu hình/lệnh 25 | [ ] | |
| 26 | Kiểm tra cấu hình/lệnh 26 | [ ] | |
| 27 | Kiểm tra cấu hình/lệnh 27 | [ ] | |
| 28 | Kiểm tra cấu hình/lệnh 28 | [ ] | |
| 29 | Kiểm tra cấu hình/lệnh 29 | [ ] | |
| 30 | Kiểm tra cấu hình/lệnh 30 | [ ] | |
| 31 | Kiểm tra cấu hình/lệnh 31 | [ ] | |
| 32 | Kiểm tra cấu hình/lệnh 32 | [ ] | |
| 33 | Kiểm tra cấu hình/lệnh 33 | [ ] | |
| 34 | Kiểm tra cấu hình/lệnh 34 | [ ] | |
| 35 | Kiểm tra cấu hình/lệnh 35 | [ ] | |
| 36 | Kiểm tra cấu hình/lệnh 36 | [ ] | |
| 37 | Kiểm tra cấu hình/lệnh 37 | [ ] | |
| 38 | Kiểm tra cấu hình/lệnh 38 | [ ] | |
| 39 | Kiểm tra cấu hình/lệnh 39 | [ ] | |
| 40 | Kiểm tra cấu hình/lệnh 40 | [ ] | |
| 41 | Kiểm tra cấu hình/lệnh 41 | [ ] | |
| 42 | Kiểm tra cấu hình/lệnh 42 | [ ] | |
| 43 | Kiểm tra cấu hình/lệnh 43 | [ ] | |
| 44 | Kiểm tra cấu hình/lệnh 44 | [ ] | |
| 45 | Kiểm tra cấu hình/lệnh 45 | [ ] | |
| 46 | Kiểm tra cấu hình/lệnh 46 | [ ] | |
| 47 | Kiểm tra cấu hình/lệnh 47 | [ ] | |
| 48 | Kiểm tra cấu hình/lệnh 48 | [ ] | |
| 49 | Kiểm tra cấu hình/lệnh 49 | [ ] | |
| 50 | Kiểm tra cấu hình/lệnh 50 | [ ] | |
| 51 | Kiểm tra cấu hình/lệnh 51 | [ ] | |
| 52 | Kiểm tra cấu hình/lệnh 52 | [ ] | |
| 53 | Kiểm tra cấu hình/lệnh 53 | [ ] | |
| 54 | Kiểm tra cấu hình/lệnh 54 | [ ] | |
| 55 | Kiểm tra cấu hình/lệnh 55 | [ ] | |
| 56 | Kiểm tra cấu hình/lệnh 56 | [ ] | |
| 57 | Kiểm tra cấu hình/lệnh 57 | [ ] | |
| 58 | Kiểm tra cấu hình/lệnh 58 | [ ] | |
| 59 | Kiểm tra cấu hình/lệnh 59 | [ ] | |
| 60 | Kiểm tra cấu hình/lệnh 60 | [ ] | |
| 61 | Kiểm tra cấu hình/lệnh 61 | [ ] | |
| 62 | Kiểm tra cấu hình/lệnh 62 | [ ] | |
| 63 | Kiểm tra cấu hình/lệnh 63 | [ ] | |
| 64 | Kiểm tra cấu hình/lệnh 64 | [ ] | |
| 65 | Kiểm tra cấu hình/lệnh 65 | [ ] | |
| 66 | Kiểm tra cấu hình/lệnh 66 | [ ] | |
| 67 | Kiểm tra cấu hình/lệnh 67 | [ ] | |
| 68 | Kiểm tra cấu hình/lệnh 68 | [ ] | |
| 69 | Kiểm tra cấu hình/lệnh 69 | [ ] | |
| 70 | Kiểm tra cấu hình/lệnh 70 | [ ] | |
| 71 | Kiểm tra cấu hình/lệnh 71 | [ ] | |
| 72 | Kiểm tra cấu hình/lệnh 72 | [ ] | |
| 73 | Kiểm tra cấu hình/lệnh 73 | [ ] | |
| 74 | Kiểm tra cấu hình/lệnh 74 | [ ] | |
| 75 | Kiểm tra cấu hình/lệnh 75 | [ ] | |
| 76 | Kiểm tra cấu hình/lệnh 76 | [ ] | |
| 77 | Kiểm tra cấu hình/lệnh 77 | [ ] | |
| 78 | Kiểm tra cấu hình/lệnh 78 | [ ] | |
| 79 | Kiểm tra cấu hình/lệnh 79 | [ ] | |
| 80 | Kiểm tra cấu hình/lệnh 80 | [ ] | |
| 81 | Kiểm tra cấu hình/lệnh 81 | [ ] | |
| 82 | Kiểm tra cấu hình/lệnh 82 | [ ] | |
| 83 | Kiểm tra cấu hình/lệnh 83 | [ ] | |
| 84 | Kiểm tra cấu hình/lệnh 84 | [ ] | |
| 85 | Kiểm tra cấu hình/lệnh 85 | [ ] | |
| 86 | Kiểm tra cấu hình/lệnh 86 | [ ] | |
| 87 | Kiểm tra cấu hình/lệnh 87 | [ ] | |
| 88 | Kiểm tra cấu hình/lệnh 88 | [ ] | |
| 89 | Kiểm tra cấu hình/lệnh 89 | [ ] | |
| 90 | Kiểm tra cấu hình/lệnh 90 | [ ] | |
| 91 | Kiểm tra cấu hình/lệnh 91 | [ ] | |
| 92 | Kiểm tra cấu hình/lệnh 92 | [ ] | |
| 93 | Kiểm tra cấu hình/lệnh 93 | [ ] | |
| 94 | Kiểm tra cấu hình/lệnh 94 | [ ] | |
| 95 | Kiểm tra cấu hình/lệnh 95 | [ ] | |
| 96 | Kiểm tra cấu hình/lệnh 96 | [ ] | |
| 97 | Kiểm tra cấu hình/lệnh 97 | [ ] | |
| 98 | Kiểm tra cấu hình/lệnh 98 | [ ] | |
| 99 | Kiểm tra cấu hình/lệnh 99 | [ ] | |
| 100 | Kiểm tra cấu hình/lệnh 100 | [ ] | |
| 101 | Kiểm tra cấu hình/lệnh 101 | [ ] | |
| 102 | Kiểm tra cấu hình/lệnh 102 | [ ] | |
| 103 | Kiểm tra cấu hình/lệnh 103 | [ ] | |
| 104 | Kiểm tra cấu hình/lệnh 104 | [ ] | |
| 105 | Kiểm tra cấu hình/lệnh 105 | [ ] | |
| 106 | Kiểm tra cấu hình/lệnh 106 | [ ] | |
| 107 | Kiểm tra cấu hình/lệnh 107 | [ ] | |
| 108 | Kiểm tra cấu hình/lệnh 108 | [ ] | |
| 109 | Kiểm tra cấu hình/lệnh 109 | [ ] | |
| 110 | Kiểm tra cấu hình/lệnh 110 | [ ] | |
| 111 | Kiểm tra cấu hình/lệnh 111 | [ ] | |
| 112 | Kiểm tra cấu hình/lệnh 112 | [ ] | |
| 113 | Kiểm tra cấu hình/lệnh 113 | [ ] | |
| 114 | Kiểm tra cấu hình/lệnh 114 | [ ] | |
| 115 | Kiểm tra cấu hình/lệnh 115 | [ ] | |
| 116 | Kiểm tra cấu hình/lệnh 116 | [ ] | |
| 117 | Kiểm tra cấu hình/lệnh 117 | [ ] | |
| 118 | Kiểm tra cấu hình/lệnh 118 | [ ] | |
| 119 | Kiểm tra cấu hình/lệnh 119 | [ ] | |
| 120 | Kiểm tra cấu hình/lệnh 120 | [ ] | |
| 121 | Kiểm tra cấu hình/lệnh 121 | [ ] | |
| 122 | Kiểm tra cấu hình/lệnh 122 | [ ] | |
| 123 | Kiểm tra cấu hình/lệnh 123 | [ ] | |
| 124 | Kiểm tra cấu hình/lệnh 124 | [ ] | |
| 125 | Kiểm tra cấu hình/lệnh 125 | [ ] | |
| 126 | Kiểm tra cấu hình/lệnh 126 | [ ] | |
| 127 | Kiểm tra cấu hình/lệnh 127 | [ ] | |
| 128 | Kiểm tra cấu hình/lệnh 128 | [ ] | |
| 129 | Kiểm tra cấu hình/lệnh 129 | [ ] | |
| 130 | Kiểm tra cấu hình/lệnh 130 | [ ] | |
| 131 | Kiểm tra cấu hình/lệnh 131 | [ ] | |
| 132 | Kiểm tra cấu hình/lệnh 132 | [ ] | |
| 133 | Kiểm tra cấu hình/lệnh 133 | [ ] | |
| 134 | Kiểm tra cấu hình/lệnh 134 | [ ] | |
| 135 | Kiểm tra cấu hình/lệnh 135 | [ ] | |
| 136 | Kiểm tra cấu hình/lệnh 136 | [ ] | |
| 137 | Kiểm tra cấu hình/lệnh 137 | [ ] | |
| 138 | Kiểm tra cấu hình/lệnh 138 | [ ] | |
| 139 | Kiểm tra cấu hình/lệnh 139 | [ ] | |
| 140 | Kiểm tra cấu hình/lệnh 140 | [ ] | |
| 141 | Kiểm tra cấu hình/lệnh 141 | [ ] | |
| 142 | Kiểm tra cấu hình/lệnh 142 | [ ] | |
| 143 | Kiểm tra cấu hình/lệnh 143 | [ ] | |
| 144 | Kiểm tra cấu hình/lệnh 144 | [ ] | |
| 145 | Kiểm tra cấu hình/lệnh 145 | [ ] | |
| 146 | Kiểm tra cấu hình/lệnh 146 | [ ] | |
| 147 | Kiểm tra cấu hình/lệnh 147 | [ ] | |
| 148 | Kiểm tra cấu hình/lệnh 148 | [ ] | |
| 149 | Kiểm tra cấu hình/lệnh 149 | [ ] | |
| 150 | Kiểm tra cấu hình/lệnh 150 | [ ] | |
| 151 | Kiểm tra cấu hình/lệnh 151 | [ ] | |
| 152 | Kiểm tra cấu hình/lệnh 152 | [ ] | |
| 153 | Kiểm tra cấu hình/lệnh 153 | [ ] | |
| 154 | Kiểm tra cấu hình/lệnh 154 | [ ] | |
| 155 | Kiểm tra cấu hình/lệnh 155 | [ ] | |
| 156 | Kiểm tra cấu hình/lệnh 156 | [ ] | |
| 157 | Kiểm tra cấu hình/lệnh 157 | [ ] | |
| 158 | Kiểm tra cấu hình/lệnh 158 | [ ] | |
| 159 | Kiểm tra cấu hình/lệnh 159 | [ ] | |
| 160 | Kiểm tra cấu hình/lệnh 160 | [ ] | |
| 161 | Kiểm tra cấu hình/lệnh 161 | [ ] | |
| 162 | Kiểm tra cấu hình/lệnh 162 | [ ] | |
| 163 | Kiểm tra cấu hình/lệnh 163 | [ ] | |
| 164 | Kiểm tra cấu hình/lệnh 164 | [ ] | |
| 165 | Kiểm tra cấu hình/lệnh 165 | [ ] | |
| 166 | Kiểm tra cấu hình/lệnh 166 | [ ] | |
| 167 | Kiểm tra cấu hình/lệnh 167 | [ ] | |
| 168 | Kiểm tra cấu hình/lệnh 168 | [ ] | |
| 169 | Kiểm tra cấu hình/lệnh 169 | [ ] | |
| 170 | Kiểm tra cấu hình/lệnh 170 | [ ] | |
| 171 | Kiểm tra cấu hình/lệnh 171 | [ ] | |
| 172 | Kiểm tra cấu hình/lệnh 172 | [ ] | |
| 173 | Kiểm tra cấu hình/lệnh 173 | [ ] | |
| 174 | Kiểm tra cấu hình/lệnh 174 | [ ] | |
| 175 | Kiểm tra cấu hình/lệnh 175 | [ ] | |
| 176 | Kiểm tra cấu hình/lệnh 176 | [ ] | |
| 177 | Kiểm tra cấu hình/lệnh 177 | [ ] | |
| 178 | Kiểm tra cấu hình/lệnh 178 | [ ] | |
| 179 | Kiểm tra cấu hình/lệnh 179 | [ ] | |
| 180 | Kiểm tra cấu hình/lệnh 180 | [ ] | |
| 181 | Kiểm tra cấu hình/lệnh 181 | [ ] | |
| 182 | Kiểm tra cấu hình/lệnh 182 | [ ] | |
| 183 | Kiểm tra cấu hình/lệnh 183 | [ ] | |
| 184 | Kiểm tra cấu hình/lệnh 184 | [ ] | |
| 185 | Kiểm tra cấu hình/lệnh 185 | [ ] | |
| 186 | Kiểm tra cấu hình/lệnh 186 | [ ] | |
| 187 | Kiểm tra cấu hình/lệnh 187 | [ ] | |
| 188 | Kiểm tra cấu hình/lệnh 188 | [ ] | |
| 189 | Kiểm tra cấu hình/lệnh 189 | [ ] | |
| 190 | Kiểm tra cấu hình/lệnh 190 | [ ] | |
| 191 | Kiểm tra cấu hình/lệnh 191 | [ ] | |
| 192 | Kiểm tra cấu hình/lệnh 192 | [ ] | |
| 193 | Kiểm tra cấu hình/lệnh 193 | [ ] | |
| 194 | Kiểm tra cấu hình/lệnh 194 | [ ] | |
| 195 | Kiểm tra cấu hình/lệnh 195 | [ ] | |
| 196 | Kiểm tra cấu hình/lệnh 196 | [ ] | |
| 197 | Kiểm tra cấu hình/lệnh 197 | [ ] | |
| 198 | Kiểm tra cấu hình/lệnh 198 | [ ] | |
| 199 | Kiểm tra cấu hình/lệnh 199 | [ ] | |
| 200 | Kiểm tra cấu hình/lệnh 200 | [ ] | |

## Phụ lục B: Nhật ký triển khai
- Nhật ký 1: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 2: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 3: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 4: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 5: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 6: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 7: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 8: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 9: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 10: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 11: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 12: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 13: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 14: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 15: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 16: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 17: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 18: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 19: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 20: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 21: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 22: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 23: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 24: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 25: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 26: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 27: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 28: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 29: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 30: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 31: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 32: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 33: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 34: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 35: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 36: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 37: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 38: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 39: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 40: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 41: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 42: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 43: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 44: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 45: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 46: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 47: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 48: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 49: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 50: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 51: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 52: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 53: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 54: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 55: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 56: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 57: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 58: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 59: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 60: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 61: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 62: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 63: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 64: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 65: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 66: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 67: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 68: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 69: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 70: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 71: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 72: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 73: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 74: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 75: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 76: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 77: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 78: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 79: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 80: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 81: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 82: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 83: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 84: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 85: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 86: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 87: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 88: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 89: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 90: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 91: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 92: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 93: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 94: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 95: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 96: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 97: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 98: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 99: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 100: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 101: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 102: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 103: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 104: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 105: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 106: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 107: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 108: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 109: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 110: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 111: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 112: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 113: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 114: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 115: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 116: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 117: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 118: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 119: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 120: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 121: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 122: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 123: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 124: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 125: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 126: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 127: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 128: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 129: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 130: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 131: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 132: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 133: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 134: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 135: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 136: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 137: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 138: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 139: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 140: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 141: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 142: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 143: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 144: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 145: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 146: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 147: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 148: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 149: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 150: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 151: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 152: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 153: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 154: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 155: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 156: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 157: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 158: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 159: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 160: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 161: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 162: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 163: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 164: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 165: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 166: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 167: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 168: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 169: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 170: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 171: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 172: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 173: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 174: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 175: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 176: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 177: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 178: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 179: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 180: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 181: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 182: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 183: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 184: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 185: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 186: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 187: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 188: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 189: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 190: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 191: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 192: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 193: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 194: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 195: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 196: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 197: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 198: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 199: Ghi lại thao tác, lỗi, hướng khắc phục.
- Nhật ký 200: Ghi lại thao tác, lỗi, hướng khắc phục.