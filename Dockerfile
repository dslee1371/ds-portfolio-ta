# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# 패키지 매니저 캐시 살리기
COPY package*.json ./
# (pnpm/yarn 쓰면 해당 lockfile도 같이 복사)
RUN npm ci

# 소스 복사
COPY . .

# 환경변수: 라우팅이 / 가 아닐 경우 설정 (기본값 '/')
# ARG VITE_BASE=/ 
# ENV VITE_BASE=${VITE_BASE}

# Vite 프로덕션 빌드
RUN npm run build

# ---- Run stage (Nginx) ----
FROM nginx:1.27-alpine AS runner
# 헬스체크용 페이지
RUN printf 'healthy' > /usr/share/nginx/html/healthz
# Nginx 설정 교체
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 정적 파일 복사
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -qO- http://localhost/healthz || exit 1
CMD ["nginx", "-g", "daemon off;"]
