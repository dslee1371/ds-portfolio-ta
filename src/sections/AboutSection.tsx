import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
  "Kubernetes",
  "Helm",
  "Kustomize",
  "Argo CD",
  "Jenkins",
  "GitHub Actions",
  "Terraform",
  "Ansible",
  "Docker",
  "Nginx",
  "Prometheus/Grafana",
  "AWS",
  "GCP",
  "MySQL",
  "Python",
  "Streamlit",
];

export default function AboutSection() {
  return (
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
            대표 이력: 삼성전자 RCS DDO(2023–2024, EKS·Terraform·Argo), KB국민카드 MSP(2022–2023, EKS·GitLab CI/CD), 다수의 AD·보안 인프라 프로젝트 PL/PM 수행.
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
  );
}
