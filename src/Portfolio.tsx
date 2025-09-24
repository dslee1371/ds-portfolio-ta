import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Rocket,
  Server,
  Boxes,
  Cloud,
  Cpu,
  ShieldCheck,
  Clock,
  FolderKanban,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { ThemeToggle } from "@/components/ThemeToggle";

import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";



// ---------------------------
// Portfolio — Single File
// ---------------------------

type Project = {
  title: string;
  desc: string;
  tags: string[];
  href?: string;
};

type Experience = {
  period: string;
  role: string;
  org: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Binance 자동 매매 시스템",
    desc: "Python · FastAPI · MySQL · Futures API · 리스크 헤지 엔진 · Kubernetes 오케스트레이션",
    tags: ["Python", "Binance", "MySQL", "Kubernetes", "Prometheus"],
    href: "#",
  },
  {
    title: "네이버 부동산 스크래퍼",
    desc: "Streamlit 대시보드 · ETL 크롤러 · Prometheus 메트릭스 · 자동화 배포 파이프라인",
    tags: ["Streamlit", "GitOps", "Grafana", "Docker"],
    href: "#",
  },
  {
    title: "KCB DR 환경 구축",
    desc: "AWS 다계정(EKS/EC2) · Argo CD · Helm 차트 · 엔터프라이즈 CI/CD 파이프라인",
    tags: ["AWS", "EKS", "Argo CD", "Helm"],
    href: "#",
  },
];

const SKILLS = [
  "Kubernetes", "Helm", "Kustomize", "Argo CD", "Jenkins", "GitHub Actions",
  "Terraform", "Ansible", "Docker", "Nginx", "Prometheus/Grafana",
  "AWS", "GCP", "MySQL", "Python", "Streamlit"
];

const STATS = [
  {
    label: "운영 경험",
    value: "10+년",
    desc: "엔터프라이즈·금융권 미션 크리티컬 프로그램",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    label: "주요 수행 과제",
    value: "35건",
    desc: "대규모 인프라스트럭처 설계·전환",
    icon: <FolderKanban className="h-5 w-5" />,
  },
  {
    label: "서비스 안정성 지표",
    value: "99.95%",
    desc: "SLA 준수율 · 규제 감사 적합성",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const EXPERIENCES: Experience[] = [
  {
    period: "2023 — 2024",
    role: "DevOps 리드 엔지니어",
    org: "삼성전자 RCS DDO",
    summary: "클라우드 네이티브 전환 전략과 배포 자동화 거버넌스를 총괄",
    highlights: [
      "EKS 멀티 AZ 아키텍처와 GitOps 파이프라인을 설계·도입",
      "Terraform · Argo CD 기반 IaC/배포 자동화 거버넌스 확립",
    ],
    stack: ["AWS", "EKS", "Terraform", "Argo CD", "GitOps"],
  },
  {
    period: "2022 — 2023",
    role: "SRE/DevOps 컨설턴트",
    org: "KB국민카드 MSP",
    summary: "금융권 Kubernetes 운영 안정화와 관측 체계 고도화",
    highlights: [
      "GitLab CI · Argo Rollouts 기반 점진적 배포 전략 설계",
      "Prometheus/Grafana · Loki 스택으로 관측성 표준화",
    ],
    stack: ["Kubernetes", "GitLab CI", "Argo Rollouts", "Prometheus", "Grafana"],
  },
  {
    period: "2019 — 2022",
    role: "플랫폼 엔지니어",
    org: "다수 공공·금융 인프라",
    summary: "보안·네트워크를 아우르는 통합 운영 플랫폼 구축",
    highlights: [
      "AD·보안 인프라 프로그램 PL/PM 및 재해복구 시나리오 수립",
      "자동화 스크립트와 파이프라인으로 운영 표준 절차화",
    ],
    stack: ["Ansible", "Python", "VMware", "Security", "DR"],
  },
];

// 모든 프로젝트의 태그를 수집해서 정렬
const ALL_TAGS = Array.from(
  new Set(PROJECTS.flatMap((p) => p.tags))
).sort();

export default function Portfolio() {
  // Portfolio() 내부, return 위쪽에 추가
  const [query, setQuery] = React.useState("");
  const [activeTags, setActiveTags] = React.useState<Set<string>>(new Set());

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      const matchesTags =
        activeTags.size === 0 ||
        Array.from(activeTags).every((t) => p.tags.includes(t)); // AND 조건

      return matchesQuery && matchesTags;
    });
  }, [query, activeTags]);
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <AnimatedBackground />
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10">
              <Rocket className="h-4 w-4" />
            </span>
            <span>이동수 · DevOps & Cloud Architect</span>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a href="#about" className="hover:text-primary">소개</a>
            <a href="#projects" className="hover:text-primary">프로젝트</a>
            <a href="#skills" className="hover:text-primary">기술스택</a>
            <a href="#contact" className="hover:text-primary">문의</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <IconLink href="mailto:dslee1371@gmail.com" label="email"><Mail className="h-5 w-5" /></IconLink>
            <IconLink href="https://github.com/dslee1371" label="github" newTab><Github className="h-5 w-5" /></IconLink>
            <IconLink href="#" label="linkedin" newTab><Linkedin className="h-5 w-5" /></IconLink>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="mb-4 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/20 via-sky-500/20 to-purple-500/25 text-primary"
            >
              SRE · DevOps · Cloud Architecture
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              안녕하세요, <span className="bg-gradient-to-r from-primary via-sky-500 to-purple-500 bg-clip-text text-transparent">이동수</span>입니다.
            </h1>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Python 기반 CI/CD 파이프라인과 Kubernetes, AWS/GCP 인프라스트럭처를 토대로
              미션 크리티컬 서비스를 설계하고 자동화하는 DevOps/클라우드 아키텍트입니다.
              복잡한 운영 환경을 구조화된 표준과 코드 중심 거버넌스로 정렬합니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-2xl bg-gradient-to-r from-primary via-sky-600 to-purple-600 text-primary-foreground shadow-lg transition hover:scale-[1.02] hover:from-primary/90 hover:via-sky-500 hover:to-purple-500"
              >
                <a href="#contact"><Mail className="mr-2 h-4 w-4" />프로젝트 상담 요청</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-primary/40 text-primary hover:bg-primary/10 hover:text-primary"
              >
                <a href="#resume">이력서 보기</a>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-background/60 p-4 shadow-lg backdrop-blur transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-sky-500/15 to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                      <span className="text-primary drop-shadow-sm">{stat.icon}</span>
                    </div>
                    <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground leading-snug">{stat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <Card className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-background/95 via-primary/10 to-background shadow-2xl">
              <motion.div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_60%)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <CardContent className="p-6 md:p-8">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Core Focus</p>
                <h2 className="mt-2 text-2xl font-semibold leading-tight">
                  안정성과 민첩성을 균형화한
                  <span className="ml-1 bg-gradient-to-r from-primary via-sky-500 to-purple-500 bg-clip-text text-transparent">
                    운영 전략 프레임워크
                  </span>
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <Feature icon={<Server className="h-5 w-5" />} title="인프라" desc="EKS/RKE2 멀티클러스터 아키텍처" />
                  <Feature icon={<Boxes className="h-5 w-5" />} title="클러스터" desc="관측성·로깅 스택 표준화" />
                  <Feature icon={<Cloud className="h-5 w-5" />} title="클라우드" desc="AWS·GCP 네트워크 레퍼런스" />
                  <Feature icon={<Cpu className="h-5 w-5" />} title="자동화" desc="IaC·CI/CD 거버넌스" />
                  <Feature icon={<Rocket className="h-5 w-5" />} title="딜리버리" desc="GitOps·릴리즈 전략" />
                  <Feature icon={<Github className="h-5 w-5" />} title="개발" desc="Python·API 오케스트레이션" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold">소개</h2>
            <p className="mt-2 text-muted-foreground">Who I am</p>
          </div>
          <div className="md:col-span-2 space-y-4 leading-relaxed">
            <p>
              대기업과 금융권 환경에서 Kubernetes 중심의 운영 플랫폼, CI/CD 체계, IaC·Observability 프레임워크를 설계하고 고도화했습니다.
              네트워크·보안·배포 파이프라인을 통합 설계해 복잡한 운영 이슈를 신속하게 안정화합니다.
            </p>
            <p className="text-sm text-muted-foreground">
              대표 이력: 삼성전자 RCS DDO(2023–2024, EKS·Terraform·Argo),
              KB국민카드 MSP(2022–2023, EKS·GitLab CI/CD), 다수의 AD·보안 인프라 프로젝트 PL/PM 수행.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {SKILLS.slice(0, 8).map((skill) => (
                <motion.div
                  key={skill}
                  className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-r from-primary/10 via-sky-500/10 to-purple-500/10 px-4 py-3 shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -right-3 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-primary/20 blur-2xl" />
                  </div>
                  <div className="relative">
                    <p className="text-sm font-medium">{skill}</p>
                    <p className="text-xs text-muted-foreground">주요 전문 분야</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          <div>
            <h2 className="text-2xl font-bold">경력 하이라이트</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              팀 조직화부터 배포 자동화, 관측성 확보까지 엔드투엔드로 주도한 프로그램을 요약했습니다.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-border md:block" />
            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative md:pl-12"
                >
                  <span className="absolute left-0 hidden h-2 w-2 -translate-x-[3px] rounded-full bg-primary md:block" />
                  <Card className="rounded-2xl border bg-background/90 shadow-lg">
                    <CardHeader className="pb-3">
                      <CardDescription className="text-xs uppercase tracking-wider text-muted-foreground">
                        {exp.period}
                      </CardDescription>
                      <CardTitle className="text-xl leading-tight">{exp.role}</CardTitle>
                      <p className="text-sm text-muted-foreground">{exp.org}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm leading-relaxed text-muted-foreground">{exp.summary}</p>
                      <ul className="space-y-2 text-sm">
                        {exp.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/60" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((item) => (
                          <Badge key={item} variant="secondary" className="rounded-xl">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">선정 프로젝트</h2>

        {/* 검색 + 필터 바 */}
        <div className="mb-4 flex flex-col gap-3">
          {/* 검색창 */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="프로젝트 검색 (제목/설명/태그)"
              className="pl-9"
              value={query}
              // onChange={(e) => setQuery(e.target.value)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            />
            {query && (
              <button
                type="button"
                aria-label="검색어 지우기"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                onClick={() => setQuery("")}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* 태그 필터 칩들 */}
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((tag) => {
              const on = activeTags.has(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    const next = new Set(activeTags);
                    if (on) {
                      next.delete(tag);
                    } else {
                      next.add(tag);
                    }
                    setActiveTags(next);
                  }}
                  className={[
                    "rounded-xl border px-3 py-1 text-sm transition-all",
                    on
                      ? "border-transparent bg-gradient-to-r from-primary via-sky-500 to-purple-500 text-primary-foreground shadow-lg"
                      : "hover:border-primary/40 hover:bg-primary/5"
                  ].join(" ")}
                >
                  {tag}
                </button>
              );
            })}

            {/* 필터 초기화 */}
            {!!activeTags.size && (
              <button
                type="button"
                onClick={() => setActiveTags(new Set())}
                className="rounded-xl border px-3 py-1 text-sm hover:bg-muted"
              >
                초기화
              </button>
            )}
          </div>

          {/* 결과 요약 */}
          <div className="text-sm text-muted-foreground">
            {filtered.length}개 결과
            {query && <> · “{query}”</>}
            {!!activeTags.size && (
              <>
                {" "}
                · 태그: {Array.from(activeTags).join(", ")}
              </>
            )}
          </div>
        </div>

        {/* 결과 카드 그리드 */}
        {filtered.length ? (
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((p, idx) => (
              <motion.div
                key={p.title}
                className="group h-full"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <Card className="relative h-full overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-background/90 via-primary/5 to-background/95 shadow-lg transition-shadow group-hover:shadow-2xl">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-sky-500/15 to-purple-500/20" />
                  </div>
                  <CardHeader className="relative z-10 pb-3">
                    <CardTitle className="text-lg transition-colors group-hover:text-primary">{p.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{p.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t} variant="secondary" className="rounded-xl border border-primary/10 bg-primary/5 text-foreground">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <Button asChild variant="ghost" size="sm" className="rounded-xl text-primary hover:text-primary">
                        <a href={p.href ?? "#"} target="_blank" rel="noreferrer">
                          상세 보기
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <Card className="rounded-2xl">
            <CardContent className="py-10 text-center text-muted-foreground">
              검색 조건에 부합하는 프로젝트가 없습니다.
            </CardContent>
          </Card>
        )}
      </section>


      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">기술 스택</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {SKILLS.map((s) => (
            <motion.div
              key={s}
              className="group flex items-center justify-between overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/10 via-sky-500/10 to-purple-500/10 px-4 py-3 text-sm shadow-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <span className="font-medium">{s}</span>
              <span className="relative h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-sky-500 to-purple-500 blur-[2px]" />
                <span className="absolute inset-[2px] rounded-full bg-background" />
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <Card className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/20 via-sky-500/15 to-purple-500/20">
          <div className="pointer-events-none absolute inset-y-0 right-[-10%] hidden h-full w-1/2 rounded-full bg-primary/10 blur-3xl sm:block" />
          <CardHeader>
            <Badge variant="outline" className="w-fit rounded-xl">Let's talk</Badge>
            <CardTitle className="text-3xl">프로젝트 컨설팅 문의</CardTitle>
            <CardDescription className="max-w-2xl text-base text-muted-foreground">
              핵심 요구사항을 공유해 주시면 비즈니스 목표와 우선순위에 맞춘 실행 전략을 설계해 드립니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href="mailto:dslee1371@gmail.com"><Mail className="mr-2 h-4 w-4" />이메일 상담</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href="https://github.com/dslee1371" target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" />GitHub</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href="#" target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" />LinkedIn</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer id="resume" className="mt-12 border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} 이동수. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-xl" asChild>
                <a href="#">PDF 이력서</a>
              </Button>
              <Button variant="outline" size="sm" className="rounded-xl" asChild>
                <a href="http://gitea.apps.lab3.dslee.lab/bn_user/simple" target="_blank" rel="noreferrer">Gitea</a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ---------------------------
// Small Components
// ---------------------------

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, rotate: -0.5 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className="group relative flex items-start gap-3 overflow-hidden rounded-2xl border border-primary/15 bg-background/70 p-4 shadow-sm"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-sky-500/10 to-purple-500/15" />
      </div>
      <div className="relative z-10 mt-1 text-primary">{icon}</div>
      <div className="relative z-10">
        <p className="font-medium leading-tight">{title}</p>
        <p className="text-sm text-muted-foreground leading-snug">{desc}</p>
      </div>
    </motion.div>
  );
}

function IconLink({
  href,
  label,
  children,
  newTab,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  newTab?: boolean;
}) {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="rounded-xl transition hover:bg-primary/10"
      aria-label={label}
    >
      <a href={href} {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}>
        {children}
      </a>
    </Button>
  );
}

function AnimatedBackground() {
  const blobs = [
    {
      className:
        "bg-gradient-to-br from-primary/20 via-sky-500/15 to-purple-500/25",
      initial: { x: -120, y: -160 },
      animate: { x: [ -160, 80, -120 ], y: [ -120, -80, -160 ], rotate: [0, 30, -15] },
      size: "h-[28rem] w-[28rem]",
      delay: 0,
    },
    {
      className:
        "bg-gradient-to-tr from-sky-400/25 via-blue-500/10 to-transparent",
      initial: { x: 220, y: 140 },
      animate: { x: [200, 120, 260], y: [120, 200, 140], rotate: [0, -25, 10] },
      size: "h-[22rem] w-[22rem]",
      delay: 0.3,
    },
    {
      className:
        "bg-gradient-to-br from-purple-500/25 via-fuchsia-500/10 to-transparent",
      initial: { x: -60, y: 280 },
      animate: { x: [-40, 60, -20], y: [260, 320, 280], rotate: [0, 18, -12] },
      size: "h-[26rem] w-[26rem]",
      delay: 0.6,
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary/10 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      {blobs.map((blob, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${blob.size} rounded-full blur-3xl ${blob.className}`}
          style={{ filter: "blur(80px)" }}
          initial={blob.initial}
          animate={blob.animate}
          transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: blob.delay }}
        />
      ))}
      <motion.div
        className="absolute bottom-0 left-1/2 h-56 w-[80%] -translate-x-1/2 bg-gradient-to-t from-purple-500/10 via-sky-500/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />
    </div>
  );
}
