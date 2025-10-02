export type Project = {
  title: string
  desc: string
  tags: string[]
  metrics?: string[]
  href: string
  image: string
}

export const PROJECTS: Project[] = [
  {
    title: "Binance 자동 매매 시스템",
    desc: "Python · FastAPI · MySQL · Futures API · 리스크 헤지 엔진 · Kubernetes 오케스트레이션",
    tags: ["Python", "Binance", "MySQL", "Kubernetes", "Prometheus"],
    metrics: [
      "시장 급변 시 자동 헤지로 미실현 손실 최대 35% 완화",
      "CI/CD 파이프라인 정비 후 전략 배포 리드타임 3시간 → 20분 단축",
    ],
    href: "/references/binance-hedge-case-study.html",
    image: "/ci-binance.svg",
  },
  {
    title: "네이버 부동산 스크래퍼",
    desc: "Streamlit 대시보드 · ETL 크롤러 · Prometheus 메트릭스 · 자동화 배포 파이프라인",
    tags: ["Streamlit", "GitOps", "Grafana", "Docker"],
    metrics: [
      "데이터 적재 주기를 6시간에서 30분 단위로 단축",
      "대시보드 자동화로 팀 리포트 작성 시간 70% 절감",
    ],
    href: "/references/naver-realestate-streamlit-report.html",
    image: "/ci-naver.svg",
  },
  {
    title: "KCB DR 환경 구축",
    desc: "AWS 다계정(EKS/EC2) · Argo CD · Helm 차트 · 엔터프라이즈 CI/CD 파이프라인",
    tags: ["AWS", "EKS", "Argo CD", "Helm"],
    metrics: [
      "분기별 DR 전환 리허설에서 RTO 4시간 → 45분 달성",
      "IaC 도입으로 신규 워크로드 온보딩 기간 5일 → 1일로 단축",
    ],
    href: "/references/kcb-dr-architecture.html",
    image: "/ci-kb.svg",
  },
]

export const PROJECT_TAGS = Array.from(new Set(PROJECTS.flatMap((project) => project.tags))).sort()
