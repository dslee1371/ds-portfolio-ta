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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { ThemeToggle } from "@/components/ThemeToggle";

import LazyImage from "@/components/media/LazyImage";
import { BackToTop } from "@/components/common/BackToTop";
import useSectionSpy from "@/hooks/useSectionSpy";
import { cn } from "@/lib/utils";

const AboutSection = React.lazy(() => import("./sections/AboutSection"));
const ExperienceSection = React.lazy(() => import("./sections/ExperienceSection"));
const ProjectsSection = React.lazy(() => import("./sections/ProjectsSection"));
const SkillsSection = React.lazy(() => import("./sections/SkillsSection"));
const ContactSection = React.lazy(() => import("./sections/ContactSection"));

const SEO_TITLE = "이동수 | DevOps & Cloud Engineer 포트폴리오";
const SEO_DESCRIPTION =
  "DevOps & Cloud Engineer 이동수의 포트폴리오. Kubernetes와 AWS/GCP 기반 인프라 설계, CI/CD 자동화 경험을 확인하세요.";

const SECTION_PREFETCHERS: Record<string, () => Promise<unknown>> = {
  about: () => import("./sections/AboutSection"),
  projects: () => import("./sections/ProjectsSection"),
  skills: () => import("./sections/SkillsSection"),
  contact: () => import("./sections/ContactSection"),
};

const NAV_ITEMS = [
  { id: "about", label: "소개" },
  { id: "projects", label: "프로젝트" },
  { id: "skills", label: "기술스택" },
  { id: "contact", label: "문의" },
] as const;

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

export default function Portfolio() {
  const sectionIds = React.useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const activeSection = useSectionSpy(sectionIds);

  const handlePrefetch = React.useCallback((id: string) => {
    const loader = SECTION_PREFETCHERS[id];
    if (loader) {
      void loader();
    }
  }, []);

  React.useEffect(() => {
    document.title = SEO_TITLE;

    const setMetaContent = (selector: string, content: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) {
        element.setAttribute("content", content);
      }
    };

    setMetaContent('meta[name="description"]', SEO_DESCRIPTION);
    setMetaContent('meta[property="og:title"]', SEO_TITLE);
    setMetaContent('meta[property="og:description"]', SEO_DESCRIPTION);
    setMetaContent('meta[name="twitter:title"]', SEO_TITLE);
    setMetaContent('meta[name="twitter:description"]', SEO_DESCRIPTION);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <AnimatedBackground />
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10">
              <Rocket className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>이동수 · DevOps & Cloud Architect</span>
          </div>
          <nav
            className="hidden md:flex items-center gap-4 text-sm"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative px-1 py-2 transition-colors",
                  activeSection === item.id
                    ? "text-primary after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
                aria-current={activeSection === item.id ? "true" : undefined}
                onMouseEnter={() => handlePrefetch(item.id)}
                onFocus={() => handlePrefetch(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <IconLink href="mailto:dslee1371@gmail.com" label="email">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </IconLink>
            <IconLink href="https://github.com/dslee1371" label="github" newTab>
              <Github className="h-5 w-5" aria-hidden="true" />
            </IconLink>
            <IconLink href="#" label="linkedin" newTab>
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </IconLink>
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
            className="max-w-[72ch]"
          >
            <Badge
              variant="secondary"
              className="mb-4 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/20 via-sky-500/20 to-purple-500/25 text-primary"
            >
              SRE · DevOps · Cloud Architecture
            </Badge>
            <h1 className="font-bold tracking-tight text-balance">
              Devops Engineer, <span className="bg-gradient-to-r from-primary via-sky-500 to-purple-500 bg-clip-text text-transparent">이동수</span>
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Python 기반 CI/CD 파이프라인과 Kubernetes, AWS/GCP 인프라스트럭처를 토대로
              미션 크리티컬 서비스를 설계하고 자동화하는 DevOps/클라우드 아키텍트입니다.
              복잡한 운영 환경을 구조화된 표준과 코드 중심 거버넌스로 정렬합니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-2xl bg-gradient-to-r from-primary via-sky-600 to-purple-600 text-primary-foreground shadow-lg transition hover:scale-[1.02] hover:from-primary/90 hover:via-sky-500 hover:to-purple-500"
              >
                <a href="#contact"><Mail className="mr-2 h-4 w-4" aria-hidden="true" />프로젝트 상담 요청</a>
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
                      <span className="text-primary drop-shadow-sm" aria-hidden="true">
                        {stat.icon}
                      </span>
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
                className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_60%)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <LazyImage
                src="/devops.svg"
                alt="DevOps 운영 전략을 상징하는 히어로 일러스트"
                containerClassName="relative z-10 aspect-[4/3] w-full bg-gradient-to-br from-background/80 via-muted/40 to-background"
                className="object-contain p-6 md:p-8"
                skeletonClassName="bg-muted/60"
              />
              <CardContent className="relative z-10 p-6 pt-6 md:p-8 md:pt-6">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Core Focus</p>
                <h2 className="mt-2 font-semibold leading-tight text-balance">
                  안정성과 민첩성을 균형화한
                  <span className="ml-1 bg-gradient-to-r from-primary via-sky-500 to-purple-500 bg-clip-text text-transparent">
                    운영 전략 프레임워크
                  </span>
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <Feature icon={<Server className="h-5 w-5" aria-hidden="true" />} title="인프라" desc="EKS/RKE2 멀티클러스터 아키텍처" />
                  <Feature icon={<Boxes className="h-5 w-5" aria-hidden="true" />} title="클러스터" desc="관측성·로깅 스택 표준화" />
                  <Feature icon={<Cloud className="h-5 w-5" aria-hidden="true" />} title="클라우드" desc="AWS·GCP 네트워크 레퍼런스" />
                  <Feature icon={<Cpu className="h-5 w-5" aria-hidden="true" />} title="자동화" desc="IaC·CI/CD 거버넌스" />
                  <Feature icon={<Rocket className="h-5 w-5" aria-hidden="true" />} title="딜리버리" desc="GitOps·릴리즈 전략" />
                  <Feature icon={<Github className="h-5 w-5" aria-hidden="true" />} title="개발" desc="Python·API 오케스트레이션" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Separator className="my-8" />

      <React.Suspense fallback={<SectionFallback id="about" label="소개" />}>
        <AboutSection />
      </React.Suspense>

      <React.Suspense fallback={<SectionFallback label="경력 하이라이트" />}>
        <ExperienceSection />
      </React.Suspense>

      <React.Suspense fallback={<SectionFallback id="projects" label="프로젝트" minHeight="40rem" />}>
        <ProjectsSection />
      </React.Suspense>

      <React.Suspense fallback={<SectionFallback id="skills" label="기술 스택" />}>
        <SkillsSection />
      </React.Suspense>

      <React.Suspense fallback={<SectionFallback id="contact" label="문의" />}>
        <ContactSection />
      </React.Suspense>

      <footer id="resume" className="mt-12 border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} 이동수. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-xl" asChild>
                <a href="#">PDF 이력서</a>
              </Button>
              <Button variant="outline" size="sm" className="rounded-xl" asChild>
                <a href="http://gitea.apps.lab3.dslee.lab/bn_user/simple" target="_blank" rel="noreferrer">
                  Gitea
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}

function SectionFallback({ id, label, minHeight }: { id?: string; label: string; minHeight?: string }) {
  return (
    <section
      {...(id ? { id } : {})}
      className="mx-auto max-w-6xl px-4 py-12"
      aria-label={`${label} 로딩 중`}
      aria-busy="true"
    >
      <div
        className="animate-pulse rounded-3xl border border-dashed border-primary/20 bg-muted/30"
        style={{ minHeight: minHeight ?? "16rem" }}
      />
    </section>
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
      className: "bg-gradient-to-br from-primary/20 via-sky-500/15 to-purple-500/25",
      initial: { x: -120, y: -160 },
      animate: { x: [-160, 80, -120], y: [-120, -80, -160], rotate: [0, 30, -15] },
      size: "h-[28rem] w-[28rem]",
      delay: 0,
    },
    {
      className: "bg-gradient-to-tr from-sky-400/25 via-blue-500/10 to-transparent",
      initial: { x: 220, y: 140 },
      animate: { x: [200, 120, 260], y: [120, 200, 140], rotate: [0, -25, 10] },
      size: "h-[22rem] w-[22rem]",
      delay: 0.3,
    },
    {
      className: "bg-gradient-to-br from-purple-500/25 via-fuchsia-500/10 to-transparent",
      initial: { x: -60, y: 280 },
      animate: { x: [-40, 60, -20], y: [260, 320, 280], rotate: [0, 18, -12] },
      size: "h-[26rem] w-[26rem]",
      delay: 0.6,
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {blobs.map((blob, idx) => (
        <motion.div
          key={idx}
          className={`absolute blur-3xl ${blob.size} ${blob.className}`}
          initial={blob.initial}
          animate={blob.animate}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.delay,
          }}
        />
      ))}
    </div>
  );
}
