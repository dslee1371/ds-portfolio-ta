import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Rocket, Server, Boxes, Cloud, Cpu } from "lucide-react";

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

const PROJECTS: Project[] = [
  {
    title: "Binance 자동 매매 시스템",
    desc: "Python · FastAPI · MySQL · Futures API · 리스크 관리 · K8s 운영",
    tags: ["Python", "Binance", "MySQL", "Kubernetes", "Prometheus"],
    href: "#",
  },
  {
    title: "네이버 부동산 스크래퍼",
    desc: "Streamlit 대시보드 · 크롤러 · Prometheus 메트릭 · 자동 배포",
    tags: ["Streamlit", "GitOps", "Grafana", "Docker"],
    href: "#",
  },
  {
    title: "KCB DR 환경 구축",
    desc: "AWS 다계정(EKS/EC2) · Argo CD · Helm 차트 · CI/CD 파이프라인",
    tags: ["AWS", "EKS", "Argo CD", "Helm"],
    href: "#",
  },
];

const SKILLS = [
  "Kubernetes", "Helm", "Kustomize", "Argo CD", "Jenkins", "GitHub Actions",
  "Terraform", "Ansible", "Docker", "Nginx", "Prometheus/Grafana",
  "AWS", "GCP", "MySQL", "Python", "Streamlit"
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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 text-foreground">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/60 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10">
              <Rocket className="h-4 w-4" />
            </span>
            <span>이동수 · DevOps & Cloud</span>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a href="#about" className="hover:text-primary">소개</a>
            <a href="#projects" className="hover:text-primary">프로젝트</a>
            <a href="#skills" className="hover:text-primary">기술스택</a>
            <a href="#contact" className="hover:text-primary">연락</a>
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
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 rounded-xl">SRE · DevOps · Cloud</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              안녕하세요, <span className="text-primary">이동수</span>입니다.
            </h1>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Python과 CI/CD, Kubernetes, AWS/GCP 인프라를 기반으로
              안정적인 시스템을 설계·자동화하는 DevOps/클라우드 엔지니어입니다.
              복잡한 환경을 단순화하고 운영을 코드로 관리합니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#contact"><Mail className="mr-2 h-4 w-4" />프로젝트 문의</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href="#resume">이력서 보기</a>
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {SKILLS.slice(0, 16).map((s) => (
                <Badge key={s} variant="outline" className="rounded-xl justify-center">{s}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <Card className="rounded-3xl shadow-xl">
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-3 gap-4">
                  <Feature icon={<Server className="h-5 w-5" />} title="인프라" desc="EKS/RKE2 설계·운영" />
                  <Feature icon={<Boxes className="h-5 w-5" />} title="클러스터" desc="모니터링·로깅" />
                  <Feature icon={<Cloud className="h-5 w-5" />} title="클라우드" desc="AWS·GCP·VPC" />
                  <Feature icon={<Cpu className="h-5 w-5" />} title="자동화" desc="IaC·CI/CD" />
                  <Feature icon={<Rocket className="h-5 w-5" />} title="딜리버리" desc="GitOps·배포" />
                  <Feature icon={<Github className="h-5 w-5" />} title="개발" desc="Python·API" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Separator className="my-4" />

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold">소개</h2>
            <p className="mt-2 text-muted-foreground">Who I am</p>
          </div>
          <div className="md:col-span-2 space-y-4 leading-relaxed">
            <p>
              대기업 및 금융권 프로젝트에서 Kubernetes 기반 운영과 CI/CD, IaC, 모니터링 체계를 구축했습니다.
              네트워크·보안·배포 파이프라인을 통합 설계하여 복잡한 이슈를 빠르게 안정화합니다.
            </p>
            <p className="text-sm text-muted-foreground">
              대표 경험: 삼성전자 RCS DDO(2023–2024, EKS·Terraform·Argo),
              KB국민카드 MSP(2022–2023, EKS·GitLab CI/CD), 다수의 AD·보안 인프라 프로젝트 PL/PM 수행.
            </p>
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
                    on ? next.delete(tag) : next.add(tag);
                    setActiveTags(next);
                  }}
                  className={[
                    "rounded-xl border px-3 py-1 text-sm transition",
                    on
                      ? "bg-primary text-primary-foreground border-primary"
                      : "hover:bg-muted"
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
            {filtered.map((p) => (
              <Card key={p.title} className="rounded-2xl hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  <CardDescription>{p.desc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-xl">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button asChild variant="ghost" size="sm" className="rounded-xl">
                      <a href={p.href ?? "#"} target="_blank" rel="noreferrer">
                        자세히 보기
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="rounded-2xl">
            <CardContent className="py-10 text-center text-muted-foreground">
              검색 조건에 맞는 프로젝트가 없어요.
            </CardContent>
          </Card>
        )}
      </section>


      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">기술 스택</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {SKILLS.map((s) => (
            <div key={s} className="border rounded-xl px-3 py-2 text-sm flex items-center justify-between">
              <span>{s}</span>
              <span className="h-2 w-2 rounded-full bg-primary/70" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-8">
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle>프로젝트 문의</CardTitle>
            <CardDescription>간단한 내용만 남겨주시면 빠르게 회신드리겠습니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href="mailto:dslee1371@gmail.com"><Mail className="mr-2 h-4 w-4" />이메일 보내기</a>
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
    <div className="rounded-2xl border p-4 flex items-start gap-3">
      <div className="mt-1 text-primary">{icon}</div>
      <div>
        <p className="font-medium leading-tight">{title}</p>
        <p className="text-sm text-muted-foreground leading-snug">{desc}</p>
      </div>
    </div>
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
    <Button asChild variant="ghost" size="icon" className="rounded-xl" aria-label={label}>
      <a href={href} {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}>
        {children}
      </a>
    </Button>
  );
}
