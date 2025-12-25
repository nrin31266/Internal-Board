# TÌM HIỂU, TRIỂN KHAI VÀ CẤU HÌNH NỀN TẢNG DOCKER CONTAINER TRÊN HỆ ĐIỀU HÀNH UBUNTU

---

## 0) Mục tiêu đề tài

Đề tài tập trung vào việc **tìm hiểu, triển khai và cấu hình Docker Container trên hệ điều hành Ubuntu** thông qua một dự án thực hành cụ thể. Thay vì chỉ trình bày lý thuyết, đề tài hướng tới việc:

* Triển khai một hệ thống web **đa dịch vụ (multi-service)** bằng Docker Compose.
* Phân tích và cấu hình các file quan trọng trong quá trình container hóa ứng dụng.
* Hiểu rõ cách Docker hỗ trợ **triển khai, vận hành và quản lý hệ thống** trên Linux/Ubuntu.
* Giúp các thành viên trong nhóm có thể đọc tài liệu và **tự triển khai lại hệ thống**.

Các file cấu hình trọng tâm bao gồm:

* `docker-compose.yml`
* `application.yml`
* `nginx.conf`
* `Dockerfile` (backend & frontend)
* `deploy.sh`

---

## 1) Tổng quan dự án Internal-Board

Internal-Board là một ứng dụng web quản lý **Project / Task**, được xây dựng theo mô hình client–server. Ứng dụng được chia thành **3 dịch vụ chính**, mỗi dịch vụ chạy trong một container riêng biệt:

* **Database**: PostgreSQL – lưu trữ dữ liệu.
* **Backend**: Spring Boot – xử lý logic nghiệp vụ và cung cấp API.
* **Frontend**: React + Vite, được phục vụ bởi Nginx – cung cấp giao diện người dùng.

Toàn bộ hệ thống được triển khai bằng **Docker Compose**, phù hợp cho môi trường Ubuntu và dễ dàng triển khai lại trên các máy khác.

---

## 2) Kiến trúc hệ thống tổng thể

```
Browser
   ↓
Nginx (Frontend Container)
   ↓  /api/* (Reverse Proxy)
Spring Boot (Backend Container)
   ↓
PostgreSQL (Database Container)
```

### 2.1) Phân tích luồng giao tiếp

* Người dùng truy cập ứng dụng thông qua trình duyệt.
* Nginx phục vụ các file static của frontend React.
* Các request API (`/api/...`) được **Nginx reverse proxy** sang backend Spring Boot.
* Backend xử lý logic và truy vấn dữ liệu từ PostgreSQL thông qua **Docker internal network**.

Cách tổ chức này giúp frontend **không cần biết port hoặc địa chỉ thật của backend**, tăng tính bảo mật và linh hoạt khi triển khai.

---

## 3) Bảng tóm tắt các thành phần hệ thống

| Thành phần    | Công nghệ            | Cổng      | Vai trò                       |
| ------------- | -------------------- | --------- | ----------------------------- |
| Database      | PostgreSQL 16        | 5432      | Lưu trữ dữ liệu               |
| Backend       | Spring Boot          | 8080      | Cung cấp API, xử lý nghiệp vụ |
| Frontend      | React + Vite + Nginx | 5174 → 80 | Giao diện người dùng          |
| Orchestration | Docker Compose       | -         | Quản lý toàn bộ stack         |

---

## 4) Môi trường triển khai khuyến nghị

* Hệ điều hành: **Ubuntu 20.04 trở lên**.
* Docker Engine.
* Docker Compose v2 (plugin chính thức).
* Công cụ phụ trợ: `git`, `curl`, `nano/vim`, `openssh-server` (tuỳ nhu cầu).

Việc sử dụng Ubuntu giúp hệ thống tương thích tốt với Docker và gần với môi trường server thực tế.

---

## 5) Cấu trúc thư mục dự án

```
project-root/
├── server/                 # Backend Spring Boot
├── client/                 # Frontend React + Vite
├── docker-compose.yml      # Khai báo dịch vụ Docker
├── deploy.sh               # Script bash hỗ trợ triển khai
└── README.md
```

Mỗi thành phần được tách riêng giúp dễ bảo trì, dễ mở rộng và phù hợp với mô hình Docker.

---

## 6) Docker Compose – Trung tâm điều phối hệ thống

File `docker-compose.yml` đóng vai trò **điều phối toàn bộ hệ thống**, bao gồm:

* Khai báo các service.
* Thiết lập network nội bộ.
* Gắn volume lưu trữ dữ liệu.
* Thiết lập biến môi trường và phụ thuộc giữa các service.

### 6.1) Docker Network nội bộ

Hệ thống sử dụng **bridge network** do Docker Compose tạo ra. Các container có thể giao tiếp với nhau bằng **service name** (ví dụ: `db`, `server`) thay vì IP cố định.

Lợi ích:

* Không cần cấu hình IP thủ công.
* Dễ dàng thay đổi, mở rộng service.
* Phù hợp với mô hình microservice.

### 6.2) Docker Volume – Lưu trữ dữ liệu bền vững

PostgreSQL sử dụng Docker Volume để lưu dữ liệu:

* Khi container database bị xoá hoặc khởi động lại, dữ liệu vẫn được giữ nguyên.
* Mô phỏng đúng cách vận hành hệ thống trong thực tế.

---

## 7) Cài đặt Docker trên Ubuntu

### 7.1) Cài Docker Engine

```bash
sudo apt update
sudo apt install -y docker.io
sudo systemctl enable --now docker
```

### 7.2) Cài Docker Compose v2

```bash
sudo apt install -y docker-compose-plugin
```

### 7.3) Kiểm tra phiên bản

```bash
docker --version
docker compose version
```

---

## 8) Triển khai hệ thống bằng Docker Compose

Triển khai nhanh toàn bộ hệ thống bằng một lệnh:

```bash
docker compose up -d --build
```

Sau khi triển khai:

* Frontend: [http://localhost:5174](http://localhost:5174)
* Backend API: [http://localhost:8080](http://localhost:8080)

---

## 9) Triển khai tự động bằng script deploy.sh

File `deploy.sh` giúp tự động hóa quá trình triển khai và vận hành:

```bash
chmod +x deploy.sh
./deploy.sh deploy
```

Script giúp:

* Giảm thao tác thủ công.
* Tránh lỗi khi nhập lệnh.
* Phù hợp với tư duy DevOps.

---

## 10) Kiểm tra trạng thái và log hệ thống

```bash
docker compose ps
docker compose logs -f server
```

Các lệnh này hỗ trợ theo dõi trạng thái container và debug khi hệ thống gặp lỗi.

---

## 11) Backend – Spring Boot & application.yml

### 11.1) Cấu hình datasource

Backend sử dụng biến môi trường để cấu hình kết nối database:

```yaml
url: ${SPRING_DATASOURCE_URL:jdbc:postgresql://localhost:5432/project-task-board}
```

### 11.2) Lợi ích

* Ứng dụng chạy được cả **local** và **docker**.
* Không cần sửa source code khi đổi môi trường.
* Tăng tính linh hoạt khi triển khai.

---

## 12) Frontend – Nginx & Reverse Proxy

Nginx không chỉ phục vụ frontend mà còn đóng vai trò **reverse proxy** cho backend:

* Frontend gọi API thông qua `/api/...`.
* Nginx chuyển tiếp request sang container backend.

Lợi ích:

* Ẩn kiến trúc nội bộ.
* Dễ cấu hình CORS.
* Gần với mô hình triển khai thực tế.

---

## 13) Dockerfile & Multi-stage Build

### 13.1) Backend

* Stage 1: build JAR bằng Maven.
* Stage 2: chạy ứng dụng bằng JDK runtime.

### 13.2) Frontend

* Stage 1: build React bằng Node.
* Stage 2: phục vụ static bằng Nginx.

### 13.3) Lợi ích

* Giảm kích thước image.
* Tách build và runtime.
* Tăng bảo mật và hiệu năng.

---

## 14) Kiểm tra API

```bash
curl http://localhost:8080/api/projects
```

Lệnh này dùng để kiểm tra nhanh backend có hoạt động đúng hay không.

---

## 15) Checklist triển khai nhanh

| Bước | Lệnh                                      | Trạng thái |
| ---- | ----------------------------------------- | ---------- |
| 1    | sudo apt update                           | [ ]        |
| 2    | sudo apt install -y docker.io             | [ ]        |
| 3    | sudo apt install -y docker-compose-plugin | [ ]        |
| 4    | docker compose up -d --build              | [ ]        |
| 5    | docker compose ps                         | [ ]        |

---

## 16) Kết luận

Thông qua đề tài, nhóm đã:

* Hiểu rõ cách Docker hoạt động trên Ubuntu.
* Triển khai thành công hệ thống web đa dịch vụ.
* Nắm được cách cấu hình, vận hành và quản lý container.

Đề tài giúp xây dựng nền tảng vững chắc cho việc học các môn liên quan đến **DevOps, Cloud và triển khai hệ thống** trong tương lai.
