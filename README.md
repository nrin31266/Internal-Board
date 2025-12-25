# TÌM HIỂU, TRIỂN KHAI VÀ CẤU HÌNH NỀN TẢNG DOCKER CONTAINER TRÊN HỆ ĐIỀU HÀNH UBUNTU

## 0) Mục tiêu đề tài
- Trình bày tổng quan Docker trên Ubuntu theo hướng thực hành.
- Tập trung vào triển khai và cấu hình các file: `docker-compose.yml`, `application.yml`, `nginx.conf`, `Dockerfile`, `deploy.sh`.
- Cung cấp quy trình kiểm tra, vận hành, và tối ưu hoá trên Linux/Ubuntu.

## 1) Tổng quan dự án Internal-Board
- Ứng dụng quản lý Project/Task gồm 3 dịch vụ: database, backend, frontend.
- Chạy bằng Docker Compose, phù hợp môi trường Ubuntu.

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
- Ubuntu 20.04+.
- Docker Engine + Docker Compose v2.
- Công cụ phụ trợ: git, curl, nano/vim, openssh-server (tùy yêu cầu).

## 5) Cấu trúc thư mục dự án
- `server/`: Backend Spring Boot.
- `client/`: Frontend React + Vite.
- `docker-compose.yml`: Khai báo dịch vụ, network, volume.
- `deploy.sh`: Script bash hỗ trợ triển khai.

## 6) Các file cấu hình trọng tâm
| File | Nội dung chính | Cần lưu ý |
|---|---|---|
| `docker-compose.yml` | Dịch vụ, port, env, network, volume | Cổng `5432/8080/5174`, phụ thuộc giữa service |
| `server/src/main/resources/application.yml` | Cấu hình Spring Boot, datasource | URL DB, username/password, JPA |
| `client/nginx.conf` | Nginx phục vụ frontend | root, try_files, proxy (nếu có) |
| `server/Dockerfile` | Build backend | Java version, build stages |
| `client/Dockerfile` | Build frontend | Node build + Nginx runtime |
| `deploy.sh` | Bash script triển khai | chmod +x, các lệnh docker compose |

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

## 8) Triển khai nhanh bằng Docker Compose
```
docker compose up -d --build
```

- Frontend: http://localhost:5174
- Backend: http://localhost:8080

## 9) Triển khai bằng script deploy.sh
```
chmod +x deploy.sh
./deploy.sh deploy
```

## 10) Kiểm tra trạng thái và log
```
docker compose ps
docker compose logs -f server
```

## 11) Trọng tâm: docker-compose.yml
### 11.1) Mục đích
- Tập trung cấu hình dịch vụ, port, biến môi trường và network.
### 11.2) Cấu trúc mẫu
```
services:
  db:
    image: postgres:16
    ports:
      - "5432:5432"
```
### 11.3) Bảng phân tích cấu hình
| Thành phần | Ý nghĩa | Ví dụ |
|---|---|---|
| `services` | Nhóm dịch vụ | `db`, `server`, `client` |
| `ports` | ánh xạ cổng | `8080:8080` |
| `environment` | biến môi trường | `SPRING_DATASOURCE_URL` |
| `volumes` | lưu dữ liệu | `db_data:/var/lib/postgresql/data` |
| `depends_on` | phụ thuộc | `server` phụ thuộc `db` |

## 12) Trọng tâm: application.yml
### 12.1) Nội dung quan trọng
- Datasource URL: kết nối PostgreSQL.
- Username/Password: thông tin DB.
- JPA: ddl-auto, show-sql.
### 12.2) Mẫu cấu hình
```
spring:
  datasource:
    url: jdbc:postgresql://db:5432/project-task-board
    username: root
    password: root
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
```

## 13) Trọng tâm: nginx.conf
### 13.1) Vai trò
- Phục vụ file static frontend.
- Tối ưu cache và routing.
### 13.2) Mẫu cấu hình cơ bản
```
server {
  listen 80;
  root /usr/share/nginx/html;
  location / {
    try_files $uri /index.html;
  }
}
```

## 14) Trọng tâm: Dockerfile (backend)
### 14.1) Mục tiêu
- Build jar và chạy ứng dụng Spring Boot.
### 14.2) Mẫu cấu trúc
```
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
RUN mvn -DskipTests package

FROM eclipse-temurin:17
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## 15) Trọng tâm: Dockerfile (frontend)
### 15.1) Mục tiêu
- Build React và phục vụ bằng Nginx.
### 15.2) Mẫu cấu trúc
```
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

## 16) Trọng tâm: deploy.sh (bash)
### 16.1) Vai trò
- Tự động hóa kiểm tra môi trường và triển khai.
- Cung cấp lệnh nhanh: deploy, stop, restart, logs, status.
### 16.2) Mẫu đoạn bash
```
set -euo pipefail
COMPOSE_FILE="docker-compose.yml"

docker compose -f "$COMPOSE_FILE" up -d --build
```

## 17) Kiến thức bash cần nắm
- `set -euo pipefail`: dừng khi lỗi, tránh biến rỗng.
- Biến môi trường: `export VAR=value`.
- Cấp quyền: `chmod +x deploy.sh`.

## 18) Kiểm tra API cơ bản
```
curl http://localhost:8080/api/projects
```

## 19) Checklist cài đặt nhanh
| Bước | Lệnh | Trạng thái |
|---|---|---|
| 1 | `sudo apt update` | [ ] |
| 2 | `sudo apt install -y docker.io` | [ ] |
| 3 | `sudo apt install -y docker-compose-plugin` | [ ] |
| 4 | `docker compose up -d --build` | [ ] |
| 5 | `docker compose ps` | [ ] |

## 20) Chuyên đề cấu hình 1: Phân tích file và thực hành
### 20.1) Mục tiêu
- Hiểu rõ cấu trúc cấu hình trong chuyên đề 1.
- Thực hành chỉnh sửa file cấu hình liên quan Docker/Nginx/Spring/Bash.
