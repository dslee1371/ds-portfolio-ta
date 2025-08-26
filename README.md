# ds-portfolio-app

> 🚀 DevOps & Cloud Engineer **이동수**의 개인 포트폴리오 웹 애플리케이션


---

## 📖 소개

이 프로젝트는 **Vite + React + TypeScript + TailwindCSS + shadcn/ui** 기반으로 만든 개인 포트폴리오 웹사이트입니다.  
DevOps/Cloud 관련 경험과 프로젝트를 정리하고, 기술 스택과 연락처를 보여주기 위해 제작되었습니다.

- 다크 모드 지원 🌙
- 프로젝트 검색 및 태그 필터 🔍
- 반응형 UI 📱💻
- Docker 컨테이너 배포 지원 🐳
- SEO 최적화 및 오픈그래프 메타태그 적용 ✅

---

## 🛠 기술 스택

- **Frontend**: React 18, TypeScript, Vite
- **UI**: Tailwind CSS, shadcn/ui, framer-motion, lucide-react
- **Infra**: Docker, Nginx
- **CI/CD**: GitHub Actions (Docker Build & Push)
- **배포 대상**: Docker Hub, Kubernetes (Ingress + Service + Deployment)

---

## 🚀 실행 방법

### 1. 개발 환경 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```
브라우저에서 [http://localhost:5173](http://localhost:5173) 접속

---

### 2. 프로덕션 빌드
```bash
npm run build
npm run preview
```

---

### 3. Docker 빌드 & 실행
```bash
# Docker 이미지 빌드
docker build -t ds-portfolio:latest .

# 로컬 실행 (호스트 8080 → 컨테이너 80)
docker run --rm -p 8080:80 ds-portfolio:latest
```
브라우저에서 [http://localhost:8080](http://localhost:8080) 확인

---

## 📂 프로젝트 구조

```
ds-portfolio-app/
├── public/               # 정적 파일 (favicon, og 이미지 등)
├── src/
│   ├── components/       # UI 컴포넌트
│   │   └── ui/           # shadcn/ui 컴포넌트
│   ├── lib/              # 공용 유틸 (cn 함수 등)
│   ├── App.tsx           # 루트 앱
│   ├── Portfolio.tsx     # 포트폴리오 페이지 메인
│   └── main.tsx          # 진입점
├── Dockerfile
├── nginx.conf
├── package.json
└── README.md
```

---

## 📬 연락처

- 📧 Email: [dslee1371@gmail.com](mailto:dslee1371@gmail.com)  
- 💻 GitHub: [dslee1371](https://github.com/dslee1371)  
- 💼 LinkedIn: (추가 예정)

---

## 📜 라이선스

이 프로젝트는 MIT License 하에 배포됩니다.  
자유롭게 사용 및 수정하실 수 있습니다.
