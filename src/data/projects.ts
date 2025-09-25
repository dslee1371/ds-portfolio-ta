export type Project = {
  title: string
  desc: string
  tags: string[]
  href: string
  image: string
}

export const PROJECTS: Project[] = [
  {
    title: "Binance 자동 매매 시스템",
    desc: "Python · FastAPI · MySQL · Futures API · 리스크 헤지 엔진 · Kubernetes 오케스트레이션",
    tags: ["Python", "Binance", "MySQL", "Kubernetes", "Prometheus"],
    href: "#",
    image: "/ci-binance.svg",
  },
  {
    title: "네이버 부동산 스크래퍼",
    desc: "Streamlit 대시보드 · ETL 크롤러 · Prometheus 메트릭스 · 자동화 배포 파이프라인",
    tags: ["Streamlit", "GitOps", "Grafana", "Docker"],
    href: "#",
    image: "/ci-naver.svg",
  },
  {
    title: "KCB DR 환경 구축",
    desc: "AWS 다계정(EKS/EC2) · Argo CD · Helm 차트 · 엔터프라이즈 CI/CD 파이프라인",
    tags: ["AWS", "EKS", "Argo CD", "Helm"],
    href: "#",
    image: "/ci-kb.svg",
  },
]

export const PROJECT_TAGS = Array.from(new Set(PROJECTS.flatMap((project) => project.tags))).sort()
