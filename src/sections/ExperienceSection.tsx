import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EXPERIENCES = [
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

export default function ExperienceSection() {
  return (
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
  );
}
