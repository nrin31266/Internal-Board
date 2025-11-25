#!/usr/bin/env bash
set -euo pipefail

COMPOSE_FILE="docker-compose.yml"

# ====== ĐƯỜNG DẪN CÁC FILE CẤU HÌNH QUAN TRỌNG ======
SSH_CONFIG="/etc/ssh/sshd_config"
NGINX_CONFIG="client/nginx.conf"
SPRING_APP_YML="server/src/main/resources/application.yml"
CORS_CONFIG="server/src/main/java/com/rin/server/configuration/CorsConfig.java"
DOCKER_COMPOSE="$COMPOSE_FILE"

# +++ Thêm 3 file đủ dùng +++
SERVER_DOCKERFILE="server/Dockerfile"
CLIENT_DOCKERFILE="client/Dockerfile"
CLIENT_ENV="client/.env"

# ====== helpers ======
COLOR_INFO="\033[1;34m"
COLOR_OK="\033[1;32m"
COLOR_WARN="\033[1;33m"
COLOR_ERR="\033[1;31m"
COLOR_RESET="\033[0m"

log() {
  local level="$1"; shift
  local color="$COLOR_INFO"
  case "$level" in
    INFO)  color="$COLOR_INFO" ;;
    OK)    color="$COLOR_OK" ;;
    WARN)  color="$COLOR_WARN" ;;
    ERROR) color="$COLOR_ERR" ;;
  esac
  echo -e "[$(date '+%Y-%m-%d %H:%M:%S')] ${color}[$level]${COLOR_RESET} $*"
}

usage() {
  cat <<EOF
Usage: $0 <command>

Commands:
  init       Kiểm tra môi trường & mở menu quản lý file cấu hình
  deploy     Build & chạy toàn bộ stack (db, server, client)
  stop       Dừng các container của hệ thống
  restart    Dừng và chạy lại (stop + deploy)
  status     Xem trạng thái container
  logs       Xem log các service (tail -f)
  clean      Xoá container + network, giữ lại volume DB

Config files (được quản lý bởi script):
  1) SSH server config           : $SSH_CONFIG
  2) Docker Compose (services)   : $DOCKER_COMPOSE
  3) Nginx (frontend + proxy)    : $NGINX_CONFIG
  4) Spring application.yml      : $SPRING_APP_YML
  5) CORS config (Java)          : $CORS_CONFIG
  6) Backend Dockerfile          : $SERVER_DOCKERFILE
  7) Frontend Dockerfile         : $CLIENT_DOCKERFILE
  8) Frontend .env               : $CLIENT_ENV

Ví dụ:
  $0 init
  $0 deploy
  $0 status
EOF
}

check_requirements() {
  if ! command -v docker >/dev/null 2>&1; then
    log ERROR "Docker is not installed. Please install Docker first."
    exit 1
  fi

  if docker compose version >/dev/null 2>&1; then
    : # ok
  else
    log ERROR "'docker compose' not available. Please install Docker Compose v2."
    exit 1
  fi

  if [ ! -f "$COMPOSE_FILE" ]; then
    log ERROR "File $COMPOSE_FILE not found in current directory."
    exit 1
  fi
}

show_config_overview() {
  echo
  log INFO "Danh sách các file cấu hình quan trọng trong hệ thống:"
  echo "  1) SSH server config           : $SSH_CONFIG"
  echo "  2) Docker Compose (services)   : $DOCKER_COMPOSE"
  echo "  3) Nginx (frontend + proxy)    : $NGINX_CONFIG"
  echo "  4) Spring application.yml      : $SPRING_APP_YML"
  echo "  5) CORS config (Java)          : $CORS_CONFIG"
  echo "  6) Backend Dockerfile          : $SERVER_DOCKERFILE"
  echo "  7) Frontend Dockerfile         : $CLIENT_DOCKERFILE"
  echo "  8) Frontend .env               : $CLIENT_ENV"
  echo
}

open_config_menu() {
  show_config_overview

  echo "Chọn file để mở (hoặc 0 để thoát):"
  echo "  [1] /etc/ssh/sshd_config"
  echo "  [2] docker-compose.yml"
  echo "  [3] client/nginx.conf"
  echo "  [4] server/src/main/resources/application.yml"
  echo "  [5] server/src/main/java/.../CorsConfig.java"
  echo "  [6] server/Dockerfile"
  echo "  [7] client/Dockerfile"
  echo "  [8] client/.env"
  echo "  [0] Thoát"

  read -rp "Nhập lựa chọn: " choice
  EDITOR_CMD="${EDITOR:-nano}"   # nếu không set $EDITOR thì dùng nano

  case "$choice" in
    1)
      log INFO "Mở SSH config (cần sudo)..."
      if [ -f "$SSH_CONFIG" ]; then
        sudo "$EDITOR_CMD" "$SSH_CONFIG"
      else
        log WARN "Không tìm thấy file $SSH_CONFIG"
      fi
      ;;
    2)
      log INFO "Mở docker-compose.yml..."
      if [ -f "$DOCKER_COMPOSE" ]; then
        "$EDITOR_CMD" "$DOCKER_COMPOSE"
      else
        log WARN "Không tìm thấy file $DOCKER_COMPOSE"
      fi
      ;;
    3)
      log INFO "Mở Nginx config (client/nginx.conf)..."
      if [ -f "$NGINX_CONFIG" ]; then
        "$EDITOR_CMD" "$NGINX_CONFIG"
      else
        log WARN "Không tìm thấy file $NGINX_CONFIG"
      fi
      ;;
    4)
      log INFO "Mở Spring application.yml..."
      if [ -f "$SPRING_APP_YML" ]; then
        "$EDITOR_CMD" "$SPRING_APP_YML"
      else
        log WARN "Không tìm thấy file $SPRING_APP_YML"
      fi
      ;;
    5)
      log INFO "Mở CORS config..."
      if [ -f "$CORS_CONFIG" ]; then
        "$EDITOR_CMD" "$CORS_CONFIG"
      else
        log WARN "Không tìm thấy file $CORS_CONFIG"
      fi
      ;;
    6)
      log INFO "Mở Backend Dockerfile..."
      if [ -f "$SERVER_DOCKERFILE" ]; then
        "$EDITOR_CMD" "$SERVER_DOCKERFILE"
      else
        log WARN "Không tìm thấy file $SERVER_DOCKERFILE"
      fi
      ;;
    7)
      log INFO "Mở Frontend Dockerfile..."
      if [ -f "$CLIENT_DOCKERFILE" ]; then
        "$EDITOR_CMD" "$CLIENT_DOCKERFILE"
      else
        log WARN "Không tìm thấy file $CLIENT_DOCKERFILE"
      fi
      ;;
    8)
      log INFO "Mở Frontend .env..."
      if [ -f "$CLIENT_ENV" ]; then
        "$EDITOR_CMD" "$CLIENT_ENV"
      else
        log WARN "Không tìm thấy file $CLIENT_ENV"
      fi
      ;;
    0)
      log INFO "Thoát menu cấu hình."
      ;;
    *)
      log WARN "Lựa chọn không hợp lệ."
      ;;
  esac
}

cmd_init() {
  log INFO "Running init (kiểm tra môi trường & quản lý file cấu hình)..."
  check_requirements
  open_config_menu
  log OK "Init hoàn tất."
}

cmd_deploy() {
  check_requirements
  log INFO "Starting deploy (build & up)..."

  docker compose -f "$COMPOSE_FILE" pull db || true
  docker compose -f "$COMPOSE_FILE" up -d --build

  log INFO "Waiting a few seconds for services to start..."
  sleep 5

  log INFO "Current container status:"
  docker compose -f "$COMPOSE_FILE" ps

  log INFO "Quick health check (server on :8080, client on :5173)..."
  if command -v curl >/dev/null 2>&1; then
    if curl -sSf "http://localhost:8080/api/projects" >/dev/null 2>&1; then
      log OK "Backend API reachable at http://localhost:8080/api/projects"
    else
      log WARN "Backend API health check failed (endpoint khác hoặc server chưa sẵn sàng)."
    fi

    if curl -sSf "http://localhost:5173" >/dev/null 2>&1; then
      log OK "Frontend reachable at http://localhost:5173"
    else
      log WARN "Frontend health check failed."
    fi
  else
    log WARN "curl is not installed, skipping HTTP health checks."
  fi

  log OK "Deploy completed."
}

cmd_stop() {
  check_requirements
  log INFO "Stopping containers..."
  docker compose -f "$COMPOSE_FILE" down
  log OK "All containers stopped."
}

cmd_restart() {
  log INFO "Restarting stack..."
  cmd_stop
  cmd_deploy
}

cmd_status() {
  check_requirements
  log INFO "Showing container status..."
  docker compose -f "$COMPOSE_FILE" ps
}

cmd_logs() {
  check_requirements
  log INFO "Tailing logs for server + client (Ctrl+C để thoát)..."
  docker compose -f "$COMPOSE_FILE" logs -f server client
}

cmd_clean() {
  check_requirements
  log WARN "Sẽ remove containers + network, NHƯNG GIỮ volume db_data."
  read -r -p "Chắc chắn? [y/N] " ans
  case "$ans" in
    y|Y)
      docker compose -f "$COMPOSE_FILE" down
      log OK "Đã xoá containers & network. Volume db_data vẫn còn."
      ;;
    *)
      log INFO "Huỷ clean."
      ;;
  esac
}

# ====== main ======
COMMAND="${1:-}"

case "$COMMAND" in
  init)    cmd_init ;;
  deploy)  cmd_deploy ;;
  stop)    cmd_stop ;;
  restart) cmd_restart ;;
  status)  cmd_status ;;
  logs)    cmd_logs ;;
  clean)   cmd_clean ;;
  ""|-h|--help|help) usage ;;
  *)
    log ERROR "Unknown command: $COMMAND"
    usage
    exit 1
    ;;
esac
