import React from "react";

/** ===== 타입 ===== */
type Project = {
  name: string;
  period: string;
  role: string;
  client: string;
  stack: string[];
  summary: string;
};

type CareerCompany = {
  company: string;
  period: string;
  title: string;
  duties?: string;
};

type Certification = {
  name: string;
  issued: string; // YYYY.MM or YYYY.MM.DD
};

type Education = {
  school: string;
  major?: string;
  note?: string;
  period?: string;
};

/** ===== 데이터 ===== */
export const portfolioData = {
  profile: {
    name: "이동수",
    title: "Technical Architect (TA) / DevOps",
    careerDuration: "18년 4개월",
    location: "서울특별시 중랑구",
    summary:
      "클라우드/컨테이너 아키텍처 설계, CI/CD·IaC 자동화, 보안·모니터링 통합에 전문성을 가진 TA/DevOps 엔지니어입니다. AWS·GCP·Kubernetes 기반 대규모 환경에서 운영 표준화, 데이터/로그 파이프라인, 인증/권한(AD/Keycloak) 연계를 다수 수행했습니다.",
    skillsTop: [
      "AWS",
      "GCP",
      "Kubernetes(EKS/GKE/OpenShift)",
      "Terraform",
      "Argo CD",
      "Jenkins/GitLab CI",
      "Prometheus/Grafana",
      "ELK/Loki/OpenSearch",
      "Linux",
      "Python/Node.js",
      "AD/SSO/Keycloak",
      "MySQL/PostgreSQL/MS SQL",
    ],
  },

  certifications: [
    { name: "GCP Professional", issued: "2018.07" },
    { name: "AWS Professional", issued: "2017.10" },
    { name: "MCSE", issued: "2010.02" },
  ] as Certification[],

  education: [
    {
      school: "학점은행제",
      major: "정보통신",
      note: "전문학사 재학",
      period: "2025.02",
    },
    { school: "서남대학교", major: "컴퓨터과학", note: "중퇴", period: "1999.02" },
    { school: "성원고등학교", note: "졸업", period: "1998.02" },
  ] as Education[],

  companies: [
    { company: "마이데이터", period: "2022.05 ~ 현재", title: "부장 (TA/DevOps)" },
    { company: "퓨처젠", period: "2021.02 ~ 2022.04", title: "부장 (오픈소스 엔지니어/TA)" },
    { company: "스타랩스", period: "2020.11 ~ 2021.01", title: "차장 (AWS TA)" },
    { company: "지금컴퍼니", period: "2020.06 ~ 2020.11", title: "부장 (구축/운영)" },
    { company: "퓨처젠", period: "2019.06 ~ 2020.05", title: "차장 (오픈소스 컨설팅/TA)" },
    { company: "나무기술", period: "2018.05 ~ 2019.05", title: "차장 (구축/운영)" },
    { company: "베스핀글로벌", period: "2016.10 ~ 2018.04", title: "과장 (구축/운영)" },
    { company: "소프트넷", period: "2008.06 ~ 2016.09", title: "과장 (구축)" },
    { company: "르네상스 정보기술", period: "2007.04 ~ 2008.01", title: "대리 (구축)" },
    { company: "슈트파크", period: "2005.11 ~ 2006.12", title: "사원 (구축/운영)" },
  ] as CareerCompany[],

  projectsRecent: [
    {
      name: "SGMO 프로젝트",
      period: "2025.01 ~",
      role: "TA",
      client: "삼성전자",
      stack: ["GCP", "GKE", "Python", "GitLab Runner", "Linux", "CI/CD", "보안정책"],
      summary:
        "GCP·GKE 기반 클라우드 아키텍처 설계, Python 자동화 스크립트, GitLab Runner CI/CD 구축, Linux 애플리케이션 보안정책 적용.",
    },
    {
      name: "KCB DR 시스템 구축",
      period: "2024.09 ~ 2024.12",
      role: "AA",
      client: "KCB",
      stack: ["AWS", "EKS", "OpenSearch", "Fluentd", "Jenkins", "Argo CD", "GitLab", "Linux"],
      summary:
        "AWS EKS DR환경 구성, OpenSearch/Fluentd 로그 수집, Jenkins/Argo CD CI/CD, GitLab 통합, DR 계정 권한 관리.",
    },
    {
      name: "KT CNstutio 구축",
      period: "2024.04 ~ 2024.09",
      role: "AA",
      client: "KT",
      stack: [
        "Kubernetes",
        "OpenSearch",
        "Longhorn",
        "Istio",
        "Keycloak",
        "Velero",
        "GitLab",
        "Argo CD",
        "Jenkins",
        "Kafka",
        "MySQL",
        "NeuVector",
        "MinIO",
        "Linux",
      ],
      summary: "분산 환경 통합: 보안·스토리지·관측·CI/CD·인증까지 엔드투엔드로 구성.",
    },
    {
      name: "삼성전자 RCS DDO 프로젝트 구축/운영",
      period: "2023.06 ~ 2024.03",
      role: "SWA",
      client: "삼성전자",
      stack: [
        "AWS",
        "EKS",
        "Vue.js",
        "Node.js",
        "Loki",
        "Fluent Bit",
        "Grafana",
        "Terraform Enterprise",
        "Argo CD",
        "GitHub CI",
        "GitLab Runner",
        "Linux",
      ],
      summary:
        "EKS 기반 서비스 운영·관측, TFE로 IaC 적용, Argo CD/GitHub CI·GitLab Runner로 배포 자동화, API 운영.",
    },
    {
      name: "국민카드 마이크로서비스 운영",
      period: "2022.05 ~ 2023.05",
      role: "TA",
      client: "국민카드",
      stack: ["AWS", "EKS", "WebLogic", "Oracle", "GitLab CI", "JENNIFER", "Whatap", "Linux", "보안정책"],
      summary:
        "EKS 운영, WebLogic/Oracle 기반 업무시스템 운영, GitLab CI·APM 연계, 보안정책 적용.",
    },
    {
      name: "롯데카드 OpenShift 구축 및 MSA 개발",
      period: "2021.02 ~ 2022.04",
      role: "TA/SWA",
      client: "롯데카드",
      stack: ["OpenShift", "Fuse", "JBoss", "ELK", "Resty", "Linux", "MSA"],
      summary: "OpenShift 클러스터 구축과 MSA 설계/개발, 로그/모니터링·배포 자동화.",
    },
    {
      name: "삼성 SCLOUD AWS EKS 시스템 구축",
      period: "2020.06 ~ 2020.11",
      role: "TA",
      client: "삼성전자",
      stack: [
        "AWS",
        "EKS",
        "Fluentd",
        "Prometheus",
        "Grafana",
        "ELK",
        "Terraform",
        "Keycloak",
        "Spinnaker",
        "Linux",
      ],
      summary:
        "모니터링/로그 통합, IaC, 인증/권한(Keycloak), Spinnaker 배포 자동화, 운영환경 최적화.",
    },
  ] as Project[],

  // 필요 시 오래된 프로젝트 추가 섹션
  projectsLegacyNote:
    "2008~2019년: VDI/AD/가상화/보안 인프라, OpenShift·Kubeadm·NGINX Ingress, Ansible 자동화 등 다수 프로젝트 수행",
};

/** ===== 단일 섹션 컴포넌트 ===== */
const SectionCard: React.FC<{
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}> = ({ eyebrow, title, description, children }) => (
  <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur">
    <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-sky-200/90">
        <span className="h-px w-8 bg-sky-400/60" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold text-white md:text-[2.2rem]">{title}</h2>
      {description ? <p className="max-w-2xl text-base text-slate-300">{description}</p> : null}
    </div>
    <div className="mt-8 space-y-6 text-slate-200">{children}</div>
  </section>
);

const Pill: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm font-medium text-sky-100 shadow-[0_12px_30px_rgba(15,23,42,0.35)] transition duration-200 hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-sky-500/15 hover:text-white">
    <span className="h-1.5 w-1.5 rounded-full bg-sky-300/80" aria-hidden="true" />
    {label}
  </span>
);

const Kv: React.FC<{ k: string; v?: string | React.ReactNode }> = ({ k, v }) => (
  <div className="grid gap-2 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-slate-200 transition duration-200 hover:border-white/20 sm:grid-cols-[160px_1fr] sm:items-center">
    <span className="font-semibold text-white">{k}</span>
    <span className="text-slate-300">{v}</span>
  </div>
);

/** ===== 화면 컴포넌트 ===== */
export default function Portfolio() {
  const d = portfolioData;

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[180px]" />
        <div className="absolute right-[-12rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-[160px]" />
        <div className="absolute bottom-[-18rem] left-[-10rem] h-[34rem] w-[34rem] rounded-full bg-blue-500/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-24 pt-20 sm:px-8 lg:px-12">
        {/* 헤더 */}
        <header className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-900/30 px-8 py-10 text-left shadow-[0_40px_120px_rgba(15,23,42,0.65)] sm:px-12 sm:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),_transparent_65%)]" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-sky-200">
                Technical Architect
              </span>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold text-white md:text-5xl">{d.profile.name}</h1>
                <p className="text-lg text-slate-200 md:text-xl">{d.profile.title}</p>
              </div>
              <p className="max-w-3xl text-base text-slate-200/90 md:text-lg">{d.profile.summary}</p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5">
                  <span className="inline-flex h-2 w-2 rounded-full bg-sky-300" aria-hidden="true" />
                  {d.profile.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                  경력 {d.profile.careerDuration}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.08] p-6 text-left shadow-[0_30px_80px_rgba(15,23,42,0.45)]">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/80">Focus</span>
                <h2 className="text-xl font-semibold text-white">클라우드 &amp; DevOps 표준화</h2>
              </div>
              <div>
                <div className="text-4xl font-semibold text-white md:text-5xl">{d.profile.careerDuration}</div>
                <p className="mt-2 text-sm text-slate-200/80">대형 금융·제조사 프로젝트 실무 경험</p>
              </div>
              <div className="space-y-2 text-sm text-slate-200/80">
                <p>• 멀티클라우드 인프라 설계 및 운영</p>
                <p>• CI/CD · IaC 파이프라인 고도화</p>
                <p>• 관측·보안·인증 플랫폼 통합</p>
              </div>
            </div>
          </div>
        </header>

        {/* 섹션들 */}
        <div className="grid gap-12">
          <SectionCard eyebrow="About" title="소개">
            <p className="text-base text-slate-200/90 md:text-lg">{d.profile.summary}</p>
          </SectionCard>

          <SectionCard eyebrow="Skills" title="핵심 스킬" description="프로젝트를 주도하며 반복적으로 활용한 핵심 역량들입니다.">
            <div className="flex flex-wrap gap-3">
              {d.profile.skillsTop.map((s) => (
                <Pill key={s} label={s} />
              ))}
            </div>
          </SectionCard>

          <SectionCard eyebrow="Certifications" title="자격증">
            <div className="grid gap-3 sm:grid-cols-2">
              {d.certifications.map((c) => (
                <Kv key={c.name} k={c.name} v={c.issued} />
              ))}
            </div>
          </SectionCard>

          <SectionCard eyebrow="Education" title="학력">
            <ul className="space-y-5">
              {d.education.map((e, idx) => (
                <li key={idx} className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 shadow-[0_24px_60px_rgba(15,23,42,0.35)]">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{e.school}</h3>
                      <p className="text-sm text-slate-300">
                        {[e.major, e.note].filter(Boolean).join(" · ") || ""}
                      </p>
                    </div>
                    {e.period ? (
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                        {e.period}
                      </span>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard eyebrow="Career" title="회사 경력" description="도메인·역할별로 체득한 실무 지식과 표준화 경험을 바탕으로 프로젝트를 리딩했습니다.">
            <ul className="relative space-y-6">
              <div className="absolute left-3 top-3 bottom-3 w-px bg-gradient-to-b from-sky-400/40 via-white/10 to-transparent" aria-hidden="true" />
              {d.companies.map((c, idx) => (
                <li key={c.company} className="relative pl-10">
                  <span className="absolute left-1 top-2 inline-flex h-3 w-3 -translate-x-1/2 rounded-full border border-white/40 bg-sky-300/80 shadow-[0_0_12px_rgba(56,189,248,0.7)]" aria-hidden="true" />
                  <div className="flex flex-wrap items-baseline justify-between gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 shadow-[0_24px_60px_rgba(15,23,42,0.35)] transition duration-200 hover:border-sky-400/40">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{c.company}</h3>
                      <p className="text-sm text-slate-300">{c.title}</p>
                    </div>
                    <span className="text-sm text-slate-400">{c.period}</span>
                  </div>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard eyebrow="Projects" title="주요 프로젝트" description="최근 수행한 프로젝트 중심으로 기술 스택과 역할을 정리했습니다.">
            <div className="grid gap-6 md:grid-cols-2">
              {d.projectsRecent.map((p) => (
                <article
                  key={`${p.name}-${p.period}`}
                  className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-6 shadow-[0_30px_80px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-slate-900/60"
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-white transition duration-200 group-hover:text-sky-200">
                        {p.name}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {p.client} · {p.role}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                      {p.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-slate-200/90">{p.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Pill key={`${p.name}-${s}`} label={s} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>

          <SectionCard eyebrow="Notes" title="기타">
            <p className="text-base text-slate-200/85">{d.projectsLegacyNote}</p>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
