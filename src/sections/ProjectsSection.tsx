import React from "react";
import { Search, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
import ProjectCard from "@/components/ProjectCard";

const PROJECTS = [
  {
    title: "Binance 자동 매매 시스템",
    desc: "Python · FastAPI · MySQL · Futures API · 리스크 헤지 엔진 · Kubernetes 오케스트레이션",
    tags: ["Python", "Binance", "MySQL", "Kubernetes", "Prometheus"],
    href: "#",
    image: "/ci-ds.svg",
  },
  {
    title: "네이버 부동산 스크래퍼",
    desc: "Streamlit 대시보드 · ETL 크롤러 · Prometheus 메트릭스 · 자동화 배포 파이프라인",
    tags: ["Streamlit", "GitOps", "Grafana", "Docker"],
    href: "#",
    image: "/vite.svg",
  },
  {
    title: "KCB DR 환경 구축",
    desc: "AWS 다계정(EKS/EC2) · Argo CD · Helm 차트 · 엔터프라이즈 CI/CD 파이프라인",
    tags: ["AWS", "EKS", "Argo CD", "Helm"],
    href: "#",
    image: "/ci-ds.svg",
  },
];

const ALL_TAGS = Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).sort();

export default function ProjectsSection() {
  const [query, setQuery] = React.useState("");
  const [activeTags, setActiveTags] = React.useState<Set<string>>(new Set());
  const [projects, setProjects] = React.useState<typeof PROJECTS>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const searchFieldId = React.useId();
  const searchSummaryId = React.useId();

  React.useEffect(() => {
    setProjects(PROJECTS);
    setIsLoading(false);
  }, []);

  const filtered = React.useMemo(() => {
    if (!projects.length) {
      return [];
    }
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      const matchesTags =
        activeTags.size === 0 ||
        Array.from(activeTags).every((t) => p.tags.includes(t));

      return matchesQuery && matchesTags;
    });
  }, [projects, query, activeTags]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">선정 프로젝트</h2>

      <div className="mb-4 flex flex-col gap-3">
        <div className="relative">
          <label htmlFor={searchFieldId} className="sr-only">
            프로젝트 검색어 입력
          </label>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <Input
            placeholder="프로젝트 검색 (제목/설명/태그)"
            className="pl-9"
            value={query}
            id={searchFieldId}
            aria-describedby={searchSummaryId}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
          />
          {query && (
            <button
              type="button"
              aria-label="검색어 지우기"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
              onClick={() => setQuery("")}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {ALL_TAGS.map((tag) => {
            const on = activeTags.has(tag);
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setActiveTags((prev) => {
                    const next = new Set(prev);
                    if (next.has(tag)) {
                      next.delete(tag);
                    } else {
                      next.add(tag);
                    }
                    return next;
                  });
                }}
                className={[
                  "rounded-xl border px-3 py-1 text-sm transition-all",
                  on
                    ? "border-transparent bg-gradient-to-r from-primary via-sky-500 to-purple-500 text-primary-foreground shadow-lg"
                    : "hover:border-primary/40 hover:bg-primary/5",
                ].join(" ")}
              >
                {tag}
              </button>
            );
          })}

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

        <div id={searchSummaryId} className="text-sm text-muted-foreground" aria-live="polite">
          {isLoading ? (
            <>프로젝트 로딩 중...</>
          ) : (
            <>
              {filtered.length}개 결과
              {query && <> · “{query}”</>}
              {!!activeTags.size && (
                <>
                  {" "}· 태그: {Array.from(activeTags).join(", ")}
                </>
              )}
            </>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <CardSkeleton key={idx} />
          ))}
        </div>
      ) : filtered.length ? (
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.desc}
              tags={project.tags}
              image={project.image}
              href={project.href}
              index={idx}
            />
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
  );
}
