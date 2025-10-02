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
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 style={{ margin: "24px 0 12px 0" }}>{children}</h2>
);

const Pill: React.FC<{ label: string }> = ({ label }) => (
  <span
    style={{
      display: "inline-block",
      padding: "6px 10px",
      border: "1px solid #e5e7eb",
      borderRadius: 999,
      fontSize: 13,
      marginRight: 8,
      marginBottom: 8,
    }}
  >
    {label}
  </span>
);

const Kv: React.FC<{ k: string; v?: string | React.ReactNode }> = ({ k, v }) => (
  <div style={{ display: "flex", gap: 8, fontSize: 14, lineHeight: 1.8 }}>
    <strong style={{ width: 100 }}>{k}</strong>
    <span>{v}</span>
  </div>
);

/** ===== 화면 컴포넌트 ===== */
export default function Portfolio() {
  const d = portfolioData;

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px" }}>
      {/* 헤더 */}
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>{d.profile.name}</h1>
        <div style={{ color: "#6b7280" }}>{d.profile.title}</div>
        <div style={{ color: "#6b7280", fontSize: 14 }}>
          {d.profile.location} · 경력 {d.profile.careerDuration}
        </div>
      </header>

      {/* 요약 */}
      <SectionTitle>소개</SectionTitle>
      <p style={{ marginTop: 0 }}>{d.profile.summary}</p>

      {/* 핵심 스킬 */}
      <SectionTitle>핵심 스킬</SectionTitle>
      <div>
        {d.profile.skillsTop.map((s) => (
          <Pill key={s} label={s} />
        ))}
      </div>

      {/* 자격증 */}
      <SectionTitle>자격증</SectionTitle>
      <div>
        {d.certifications.map((c) => (
          <Kv key={c.name} k={c.name} v={c.issued} />
        ))}
      </div>

      {/* 학력 */}
      <SectionTitle>학력</SectionTitle>
      <div>
        {d.education.map((e, idx) => (
          <Kv
            key={idx}
            k={e.school}
            v={
              <>
                {e.major ? `${e.major} ` : ""}
                {e.note ? `(${e.note}) ` : ""}
                {e.period ? `· ${e.period}` : ""}
              </>
            }
          />
        ))}
      </div>

      {/* 경력 요약(회사) */}
      <SectionTitle>회사 경력</SectionTitle>
      <div>
        {d.companies.map((c) => (
          <div key={c.company} style={{ marginBottom: 8 }}>
            <strong>{c.company}</strong> · {c.title} · <span style={{ color: "#6b7280" }}>{c.period}</span>
          </div>
        ))}
      </div>

      {/* 주요 프로젝트 */}
      <SectionTitle>주요 프로젝트</SectionTitle>
      <div style={{ display: "grid", gap: 16 }}>
        {d.projectsRecent.map((p) => (
          <article
            key={`${p.name}-${p.period}`}
            style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div>
                <h3 style={{ margin: "0 0 4px 0" }}>{p.name}</h3>
                <div style={{ color: "#6b7280", fontSize: 14 }}>
                  {p.client} · {p.role} · {p.period}
                </div>
              </div>
            </div>

            <p style={{ marginTop: 12 }}>{p.summary}</p>

            <div style={{ marginTop: 8 }}>
              {p.stack.map((s) => (
                <Pill key={`${p.name}-${s}`} label={s} />
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* 비고 */}
      <SectionTitle>기타</SectionTitle>
      <p style={{ marginTop: 0 }}>{d.projectsLegacyNote}</p>
    </div>
  );
}
